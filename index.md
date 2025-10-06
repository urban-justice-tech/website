---
layout: page
home: true
title: Lab for Urban Justice and Technology
---

  

  <div id="hero-wrap" class="relative w-full">

    <!-- Video Background -->
     <video id="hero-video" autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover z-0">
      <source src="{{ '/assets/imgs/hero.mp4' | relative_url }}" type="video/mp4">
    </video>
     
     <!-- Header over video -->
     <header id="site-header" class="sticky top-0 left-0 w-full z-20 bg-transparent text-[#193349] py-6">
       <div id="site-header-inner" class="w-full px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-24 4xl:px-32 mx-auto max-w-[92rem] 2xl:max-w-[110rem] 3xl:max-w-[128rem] 4xl:max-w-[144rem]">   

        <div id="site-header-inner-fixed" class="w-full px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-24 4xl:px-32 mx-auto max-w-[92rem] 2xl:max-w-[110rem] 3xl:max-w-[128rem] 4xl:max-w-[144rem]">   

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 pb-3 md:pb-0 lg:pb-0">
              <div class="lg:col-span-6 flex items-center justify-between">
                <a href="{{ '/' | relative_url }}">
                  <h1 class="text-[#193349] text-xl md:text-2xl font-bold">
                    <img src="{{ '/assets/imgs/logo.svg' | relative_url }}" alt="Lab for Urban Justice and Technology">
                  </h1>
                </a>
                <button id="menu-toggle" class="lg:hidden ml-4 p-2 rounded" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#193349]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <ul id="primary-nav" class="lg:col-span-6 hidden lg:flex flex-col lg:flex-row lg:justify-end space-y-1 lg:space-y-0 lg:space-x-8 lg:mt-0">
                <li>
                  <a href="/#our-work" class="text-[#193349] hover:text-gray-500">Our Work</a>
                </li>
                <li>
                  <a href="/#our-approach" class="text-[#193349] hover:text-gray-500">Our Approach</a>
                </li>
                <li>
                  <a href="/#team" class="text-[#193349] hover:text-gray-500">Team</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
     </header>
    
    <!-- Hero Section -->
     <div id="hero" class="relative z-10 w-full px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-24 4xl:px-32 mx-auto max-w-[92rem] 2xl:max-w-[110rem] 3xl:max-w-[128rem] 4xl:max-w-[144rem] py-5 md:py-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div class="lg:col-span-6">
          <p class="text-[#193349] text-3xl font-semibold leading-tight">
            <span class="text-[#6a5aed]">The Lab for Urban Justice and Technology</span> studies urban technologies, collects data, and builds tools and visualizations to expose the inequities behind urban technologies and contribute to repairng the relationships by acknowledging and addressing past harms.
          </p>
        </div>
      </div>
    </div>

    <!-- Research Theme Section -->
     <section class="relative z-10 w-full px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-24 4xl:px-32 mx-auto max-w-[92rem] 2xl:max-w-[110rem] 3xl:max-w-[128rem] 4xl:max-w-[144rem] py-6 md:py-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-4">
        <div class="lg:col-span-12">
          <h1 class="text-[#6e59f6] text-lg font-bold uppercase tracking-wide">RESEARCH THEME</h1>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">

        {% for theme_hash in site.data.research_theme %}

          {% assign theme = theme_hash[1] %}
          <div class="lg:col-span-4 mb-4 lg:mb-0">
            <h2 class="text-[#193349] text-lg md:text-xl font-bold mb-4">{{ theme.title | upcase }}</h2>
            <p class="text-gray-600">{{ theme.description }}</p>
          </div>
        {% endfor %}
      </div>
    </section>
  </div>

  <!-- Our Work Section -->
  <section id="our-work" class="w-full px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-24 4xl:px-32 mx-auto max-w-[92rem] 2xl:max-w-[110rem] 3xl:max-w-[128rem] 4xl:max-w-[144rem] py-6 md:py-8">
    <!-- Title and Filter Row -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-4">
      <!-- OUR WORK Title (3 columns) -->
      <div class="lg:col-span-3">
        <h1 class="text-[#6e59f6] text-lg font-bold uppercase tracking-wide  mb-3">OUR WORK</h1>
      
      
          <div class="relative">
            <svg class="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[#6e59f6]" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
            </svg>
            <input type="text" id="search-input" placeholder="Search..." class="w-full bg-transparent border-b border-[#AAA] text-[#193349] placeholder-gray-500 focus:outline-none focus:border-[#6e59f6] pb-1 pt-1 pl-6" />
          </div>
          
      </div>
      
      <!-- Research Theme Filter (3 columns) -->
      <div class="lg:col-span-3">
        <h3 class="text-[#6e59f6] text-lg font-bold uppercase tracking-wide mb-3">BY RESEARCH THEME</h3>
        <div>
          {% for theme_hash in site.data.research_theme %}
            {% assign theme = theme_hash[1] %}
            {% assign theme_key = theme_hash[0] %}
            {% assign theme_count = 0 %}
            {% for work in site.works %}
              {% if work.research_themes and work.research_themes contains theme_key %}
                {% assign theme_count = theme_count | plus: 1 %}
              {% endif %}
            {% endfor %}
            <button class="research-theme-btn inline-block px-2 py-1 rounded-lg border border-[#BBBBBB] bg-[#fafcf3] text-[#193349] text-xs font-medium mr-2 mb-1" data-theme="{{ theme_key }}"><span class="theme-title">{{ theme.title }}</span><span class="ml-1 text-[10px] opacity-70">({{ theme_count }})</span></button>
          {% endfor %}
        </div>
      </div>
      
      <!-- Tags Filter (3 columns) -->
      <div class="lg:col-span-3">
        <h3 class="text-[#6e59f6] text-lg font-bold uppercase tracking-wide mb-3">BY TAGS</h3>
        <div>
          {% for tag_group in site.data.tags %}
            {% for tag in tag_group %}
              {% if tag != "# contribution type" and tag != "# methods" and tag != "# domain" %}
                {% assign tag_count = 0 %}
                {% for work in site.works %}
                  {% if work.tags and work.tags contains tag %}
                    {% assign tag_count = tag_count | plus: 1 %}
                  {% endif %}
                {% endfor %}
                <button class="tag-btn inline-block px-2 py-1 rounded-lg border border-[#BBBBBB] bg-[#fafcf3] text-[#193349] text-xs font-medium mr-2 mb-1" data-tag="{{ tag }}">{{ tag }}<span class="ml-1 text-[10px] opacity-70">({{ tag_count }})</span></button>
              {% endif %}
            {% endfor %}
          {% endfor %}
        </div>
      </div>
    </div>
    
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
      {% assign sorted_works = site.works | sort: "year" | reverse %}
      {% for work in sorted_works %}
        {% assign url = work.external_url | default: work.url | relative_url | replace: 'index.html', '' %}
        <div class="sm:col-span-1 lg:col-span-3 mb-6 lg:mb-0 work">
          {% if work.images and work.images.size > 0 %}
            <div class="mb-4">
              <a href="{{ url }}" class="block">
                {% capture work_thumb %}/imgs/works/{{ work.slug }}/{{ work.images.first }}{% endcapture %}
                <img src="{{ work_thumb | relative_url }}" alt="{{ work.title }}" class="w-full object-cover rounded">
              </a>
            </div>
          {% endif %}
          
          <!-- Research Theme Buttons -->
          {% if work.research_themes %}
            <div class="flex flex-wrap gap-0 mb-1">
              {% for theme_key in work.research_themes %}
                {% assign theme = site.data.research_theme[theme_key] %}
                {% if theme %}
                  <span class="research-theme-btn inline-block px-2 py-1 rounded-lg border border-[#BBBBBB] bg-[#fafcf3] text-[#193349] text-xs font-medium mr-2 mb-1">{{ theme.title }}</span>
                {% endif %}
              {% endfor %}
            </div>
          {% endif %}
          
          <h3 class="text-[#193349] text-base md:text-lg font-bold mb-2 capitalize" style="line-height: 1.25;">
            <a href="{{ url }}" class="hover:text-gray-500">{{ work.title }}</a>
          </h3>
          
          <!-- Visit Website Link -->
          {% if work.website %}
            <div class="mb-2">
              <a href="{{ work.website }}" class="text-grat-400 hover:text-gray-500 text-sm transition-colors" target="_blank">
                Visit Website →
              </a>
            </div>
          {% endif %}
          
          <!-- Publisher and DOI for articles -->
          {% if work.bibtex and work.bibtex.type == 'article' %}
            <div class="mb-2">
              {% if work.publisher %}
                <p class="text-gray-600 text-sm">{{ work.publisher }}</p>
              {% endif %}
              {% if work.doi %}
                <p class="text-gray-600 text-xs">
                  <a href="https://doi.org/{{ work.doi }}" class="hover:text-[#193349] transition-colors" target="_blank">
                    DOI: {{ work.doi }}
                  </a>
                </p>
              {% endif %}
            </div>
          {% endif %}
          
          {% if work.authors %}
            <div class="flex items-center gap-2 mb-2">
              {% for author in work.authors %}
                {% assign person = site.data.people[author] %}
                {% if person.photo %}
                  <div class="flex items-center">
                    <img src="{{ '/imgs/people/' | append: person.photo | relative_url }}" alt="Profile of {{ person.first_name }}" class="w-6 h-6 rounded-full object-cover">
                  </div>
                {% endif %}
              {% endfor %}
            </div>
          {% endif %}
         
        </div>
      {% endfor %}
    </div>
  </section>

  <section id="our-approach" class="w-full px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-24 4xl:px-32 mx-auto max-w-[92rem] 2xl:max-w-[110rem] 3xl:max-w-[128rem] 4xl:max-w-[144rem] py-8 md:py-16">
    <h1 class="text-[#6e59f6] text-lg font-bold uppercase tracking-wide">OUR APPROACH</h1>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-4">
      <div class="lg:col-span-8">
        <p class="text-[#193349] text-3xl font-semibold leading-tight">
          Our approach is uncover how these systems formalize present-day outputs in ways that disconnect them from past wrongs — and to repair this rupture by exposing inequities, demanding accountability, and working toward redress.
        </p>
      </div>
    </div>
  </section>
  
  <!-- Team Section -->
  <section id="team" class="w-full px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-24 4xl:px-32 mx-auto max-w-[92rem] 2xl:max-w-[110rem] 3xl:max-w-[128rem] 4xl:max-w-[144rem] py-8 md:py-16">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-4">
      <div class="lg:col-span-12">
        <h1 class="text-[#6e59f6] text-lg font-bold uppercase tracking-wide">TEAM</h1>
      </div>
    </div>
    {% for person_hash in site.data.people %}
      {% assign person = person_hash[1] %}
      {% if person.type == 'current' %}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-4">
          <!-- Profile Image (3 columns on desktop, full width on mobile) -->
          <div class="lg:col-span-3 flex justify-center lg:justify-start">
            <div class="w-full overflow-hidden">

              {% if person.photo %}
               <img src="{{ '/imgs/people/' | append: person.photo | relative_url }}" alt="Headshot of {{person.first_name}} {{person.last_name}}" class="w-full rounded-full ">
              {% endif %}
            </div>
          </div>
          
          <!-- Name and Affiliation (4 columns on desktop, full width on mobile) -->
          <div class="lg:col-span-4">
            {% if person.url %}
              <h3 class="text-[#193349] text-lg md:text-xl font-bold mb-2">
                <a href="{{person.url}}" class="hover:text-gray-500">{{person.first_name}} {{person.last_name}}</a>
              </h3>
            {% else %}
              <h3 class="text-[#193349] text-lg md:text-xl font-bold mb-2">{{person.first_name}} {{person.last_name}}</h3>
            {% endif %}
            <p class="text-gray-600 text-sm md:text-base">{{person.title}}</p>
            <p class="text-gray-500 text-xs md:text-sm">{{person.affiliation}}</p>
          </div>
          
          <!-- Description (5 columns on desktop, full width on mobile) -->
          <div class="lg:col-span-5">
            {% if person.description %}
              <div class="text-gray-600 text-sm md:text-base leading-relaxed" id="person-desc">
                {{ person.description | markdownify }}
              </div>
            {% endif %}
          </div>
        </div>
      {% endif %}
    {% endfor %}
  </section>

  <!-- SVG duotone filter + CSS for work thumbnails -->
  <svg xmlns="http://www.w3.org/2000/svg" style="position: absolute; width: 0; height: 0; overflow: hidden;" aria-hidden="true" focusable="false">
    <defs>
      <!-- Duotone mapping: shadows -> #7655ea (purple), highlights -> #fafcf3 (off-white) -->
      <filter id="duotone-7655ea-fafcf3" color-interpolation-filters="sRGB">
        <!-- Convert to grayscale (luminance) -->
        <feColorMatrix type="matrix" values="0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0 0 0 1 0" result="gray" />
        <!-- Map grayscale to duotone colors by channel tables (black->#7655ea, white->#fafcf3) -->
        <feComponentTransfer color-interpolation-filters="sRGB">
          <!-- R channel: 0 -> 118/255 (0.462745), 1 -> 250/255 (0.980392) -->
          <feFuncR type="table" tableValues="0.462745 0.980392" />
          <!-- G channel: 0 -> 85/255 (0.333333), 1 -> 252/255 (0.988235) -->
          <feFuncG type="table" tableValues="0.333333 0.988235" />
          <!-- B channel: 0 -> 234/255 (0.917647), 1 -> 243/255 (0.952941) -->
          <feFuncB type="table" tableValues="0.917647 0.952941" />
        </feComponentTransfer>
      </filter>
    </defs>
  </svg>

  <style>
    /* Apply duotone filter only to main work thumbnails */
    .work img.w-full {
      filter: url(#duotone-7655ea-fafcf3);
      -webkit-filter: url(#duotone-7655ea-fafcf3);
      /* Smoothly transition filter removal, radius changes, and transforms */
      transition: filter 220ms ease, -webkit-filter 220ms ease, border-radius 420ms ease, transform 220ms ease;
      /* Hint to browser about upcoming transforms for better performance */
      will-change: transform, filter;
      /* Keep image rendering crisp while allowing border-radius animation */
      backface-visibility: hidden;
    }

    /* Disable duotone when the image or the work card is hovered/focused */
    .work:hover img.w-full,
    .work:focus-within img.w-full,
    .work img.w-full:hover,
    .work img.w-full:focus,
    .work img.w-full:focus-visible {
      filter: none;
      -webkit-filter: none;
    }

    /* Add a subtle zoom when the work card or the image is hovered/focused */
    .work:hover img.w-full,
    .work:focus-within img.w-full,
    .work img.w-full:hover,
    .work img.w-full:focus,
    .work img.w-full:focus-visible {
      transform: scale(1.04);
      /* Elevate slightly visually — optional shadow */
      box-shadow: 0 6px 18px rgba(19, 51, 73, 0.08);
    }

    /* --------------------------- */
    /* Team / person photos (no zoom on hover) */
    /* Target the team section images rendered as `w-full rounded-full` */
    #team img.w-full {
      filter: url(#duotone-7655ea-fafcf3);
      -webkit-filter: url(#duotone-7655ea-fafcf3);
      transition: filter 220ms ease;
      will-change: filter;
      backface-visibility: hidden;
    }

    /* On hover/focus for team avatars (image only), remove the duotone but do not scale */
    #team img.w-full:hover,
    #team img.w-full:focus,
    #team img.w-full:focus-visible {
      filter: none;
      -webkit-filter: none;
      /* explicitly prevent transform/zoom for these avatars */
      transform: none !important;
      box-shadow: none !important;
    }
  </style>

  <script>
    (function() {
      var header = document.getElementById('site-header');
      var siteHeaderInner = document.getElementById("site-header-inner-fixed");
      if (!header) return;
      var isShrunk = false;
      var threshold = 20;
      function onScroll() {
        var heroWrap = document.getElementById('hero-wrap');
        var heroWrapBottom = heroWrap ? (heroWrap.offsetTop + heroWrap.offsetHeight) : 0;
        var scrollY = window.scrollY || window.pageYOffset;

        // shrink state for background toggle
        if (scrollY > threshold) {
          header.classList.add('is-shrunk');
        } else {
          header.classList.remove('is-shrunk');
        }

        // when below hero-wrap bottom, switch to fixed (sticky within hero might release at its boundary)
        var containerClasses = ['w-full','px-5','sm:px-6','md:px-8','lg:px-10','xl:px-12','2xl:px-16','3xl:px-24','4xl:px-32','mx-auto','max-w-[92rem]','2xl:max-w-[110rem]','3xl:max-w-[128rem]','4xl:max-w-[144rem]'];
        if (scrollY + 1 >= heroWrapBottom) {
          header.classList.add('fixed');
          header.classList.remove('sticky');
          header.classList.remove('bg-transparent');
          header.classList.add('bg-[#fafcf3]');
          if (siteHeaderInner) { containerClasses.forEach(function(cls){ siteHeaderInner.classList.add(cls); }); }
        } else {
          header.classList.remove('fixed');
          header.classList.add('sticky');
          header.classList.remove('bg-[#fafcf3]');
          header.classList.add('bg-transparent');
          if (siteHeaderInner) { containerClasses.forEach(function(cls){ siteHeaderInner.classList.remove(cls); }); }
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      var menuToggle = document.getElementById('menu-toggle');
      var primaryNav = document.getElementById('primary-nav');
      if (menuToggle && primaryNav) {
        menuToggle.addEventListener('click', function() {
          var isHidden = primaryNav.classList.contains('hidden');
          if (isHidden) {
            primaryNav.classList.remove('hidden');
            menuToggle.setAttribute('aria-expanded', 'true');
          } else {
            primaryNav.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', 'false');
          }
        });
      }

    })();
  </script>

  <!-- Interested in Joining Section -->
  <section class="w-full px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-24 4xl:px-32 mx-auto max-w-[92rem] 2xl:max-w-[110rem] 3xl:max-w-[128rem] 4xl:max-w-[144rem] py-8 md:py-16">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="lg:col-span-3 mb-4 lg:mb-0">
        <h2 class="text-[#6e59f6] text-xl md:text-2xl font-bold">Interested in joining?</h2>
      </div>
      <div class="lg:col-span-6">
        <p class="text-gray-600">We're always looking for passionate researchers and collaborators who share our vision for urban justice and technology. <a href="mailto:wyso@umich.edu" class="underline">Get in touch</a> to learn more about opportunities.</p>
      </div>
    </div>
  </section>

