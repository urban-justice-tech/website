document.addEventListener('DOMContentLoaded', function() {
  const $  = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  // Inputs and controls
  const searchInput = $('#search-input');
  const themeFilterButtons = $$('.research-theme-btn[data-theme]');
  const tagFilterButtons = $$('.tag-btn');

  // Work cards
  const workCards = $$('.work');

  // Helpers to style buttons
  function setActive(btn) {
    btn.classList.add('selected');
    btn.classList.remove('border-[#BBBBBB]', 'bg-[#f3f4f6]', 'text-[#193349]');
    btn.classList.remove('border-[#193349]', 'bg-[#193349]');
    btn.classList.add('border-[#6e59f6]', 'bg-[#6e59f6]', 'text-white');
  }

  function setInactive(btn) {
    btn.classList.remove('selected');
    btn.classList.remove('border-[#6e59f6]', 'bg-[#6e59f6]', 'text-white');
    btn.classList.remove('border-[#193349]', 'bg-[#193349]');
    btn.classList.add('border-[#BBBBBB]', 'bg-[#fafcf3]', 'text-[#193349]');
  }

  // Build a mapping from Theme Title -> Theme Key using header buttons
  const themeTitleToKey = (() => {
    const map = new Map();
    for (const btn of themeFilterButtons) {
      const key = btn.getAttribute('data-theme');
      const title = (btn.querySelector('.theme-title')?.textContent || btn.textContent).trim();
      map.set(title, key);
    }
    return map;
  })();

  // Cache for tags per work (by href)
  const workTagsCache = new Map();

  // Extract metadata from each work card
  function getCardMeta(card) {
    const title = (card.querySelector('h3 a')?.textContent || '').trim();
    // Themes shown as badges inside card (no data-theme there), map their text to keys
    const themeTitles = [...card.querySelectorAll('.research-theme-btn')]
      .map(e => (e.querySelector('.theme-title')?.textContent || e.textContent).trim())
      .filter(t => t.length > 0);
    const themeKeys = themeTitles
      .map(t => themeTitleToKey.get(t))
      .filter(Boolean);

    // Link to detail page to optionally fetch tags
    const href = card.querySelector('h3 a')?.getAttribute('href') || '';

    return { titleLower: title.toLowerCase(), themeKeys, href };
  }

  const cardToMeta = new Map([...workCards].map(card => [card, getCardMeta(card)]));

  // Selected filters
  const selectedThemeKeys = new Set();
  const selectedTags = new Set();

  // Utility: fetch and cache tags for a work page (only when needed)
  async function ensureTagsFor(card) {
    const meta = cardToMeta.get(card);
    if (!meta || !meta.href) return [];
    if (workTagsCache.has(meta.href)) return workTagsCache.get(meta.href);

    try {
      const res = await fetch(meta.href, { credentials: 'same-origin' });
      if (!res.ok) throw new Error('Failed to load work page');
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      // Find the Tags section by heading text, then collect spans under its parent column
      const tagsHeader = [...doc.querySelectorAll('h3')]
        .find(h => h.textContent.trim().toLowerCase() === 'tags');
      let tags = [];
      if (tagsHeader && tagsHeader.parentElement) {
        tags = [...tagsHeader.parentElement.querySelectorAll('span')]
          .map(s => s.textContent.trim())
          .filter(t => t.length > 0);
      }
      workTagsCache.set(meta.href, tags);
      return tags;
    } catch (e) {
      workTagsCache.set(meta.href, []);
      return [];
    }
  }

  // Core filter logic
  async function applyFilters() {
    const q = (searchInput?.value || '').trim().toLowerCase();
    const requireThemes = selectedThemeKeys.size > 0;
    const requireTags = selectedTags.size > 0;

    // If tags are needed, prefetch all tags concurrently for visible cards
    if (requireTags) {
      await Promise.all([...workCards].map(card => ensureTagsFor(card)));
    }

    for (const card of workCards) {
      const meta = cardToMeta.get(card);
      if (!meta) continue;

      // Text search (title only)
      if (q && !meta.titleLower.includes(q)) {
        card.style.display = 'none';
        continue;
      }

      // Theme filter (OR within selected themes, card must have at least one)
      if (requireThemes) {
        const hasAnyTheme = meta.themeKeys.some(k => selectedThemeKeys.has(k));
        if (!hasAnyTheme) {
          card.style.display = 'none';
          continue;
        }
      }

      // Tag filter (AND: card must include all selected tags)
      if (requireTags) {
        const tags = workTagsCache.get(meta.href) || [];
        const cardHasAll = [...selectedTags].every(t => tags.includes(t));
        if (!cardHasAll) {
          card.style.display = 'none';
          continue;
        }
      }

      // Passed all filters
      card.style.display = 'block';
    }
  }

  // Wire up search input
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      // Debounce micro-task: allow rapid typing without awaiting tag fetch unless needed
      applyFilters();
    });
  }

  // Wire up theme filter buttons in header (only those with data-theme)
  for (const btn of themeFilterButtons) {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-theme');
      if (selectedThemeKeys.has(key)) {
        selectedThemeKeys.delete(key);
        // Visual deactivate
        setInactive(btn);
      } else {
        selectedThemeKeys.add(key);
        // Visual activate
        setActive(btn);
      }
      applyFilters();
    });
  }

  // Wire up tag filter buttons in header
  for (const btn of tagFilterButtons) {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-tag');
      if (selectedTags.has(tag)) {
        selectedTags.delete(tag);
        // Visual deactivate
        setInactive(btn);
      } else {
        selectedTags.add(tag);
        // Visual activate
        setActive(btn);
      }
      applyFilters();
    });
  }

  // Initial render
  // Ensure initial visual state is consistent (none selected by default)
  for (const btn of themeFilterButtons) setInactive(btn);
  for (const btn of tagFilterButtons) setInactive(btn);
  applyFilters();
});
