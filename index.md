---
layout: page
home: true
title: Lab for Urban Justice and Technology
---

  <div class="relative w-full overflow-hidden">
    <!-- header -->
     <header class="relative z-10 text-[#193349] py-6">
       <div class="max-w-7xl mx-auto px-5">
         <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
           <div class="lg:col-span-6">
             <a href="/">
               <h1 class="text-[#193349] text-xl md:text-2xl font-bold">
                 <img src="/assets/imgs/logo.svg" alt="Lab for Urban Justice and Technology">
               </h1>
             </a>
           </div>
           <ul class="lg:col-span-6 flex flex-col lg:flex-row lg:justify-end space-y-2 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-0">
             <li>
               <a href="/#about" class="text-[#193349] hover:text-gray-500">About</a>
             </li>
             <li>
               <a href="/#our-work" class="text-[#193349] hover:text-gray-500">Our Work</a>
             </li>
             <li>
               <a href="/#team" class="text-[#193349] hover:text-gray-500">Team</a>
             </li>
           </ul>
         </div>
       </div>
     </header>

    <!-- Video Background -->
    <!-- <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover z-0">
      <source src="/assets/imgs/hero.mp4" type="video/mp4">
    </video> -->
    
    <!-- Hero Section -->
    <div id="hero" class="relative z-10 max-w-7xl mx-auto px-5 py-12 md:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div class="lg:col-span-6">
          <p class="text-[#193349] text-3xl font-semibold leading-tight">
            <span class="text-[#6a5aed]">The Lab for Urban Justice and Technology</span> studies urban technologies, collect data, build tools and data visualization to expose the inequities behind urban technologies and contribute to repairing the relationships.
          </p>
        </div>
      </div>
    </div>

    <!-- Research Theme Section -->
    <section class="relative z-10 max-w-7xl mx-auto px-5 py-6 md:py-8">
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
  <section id="our-work" class="max-w-7xl mx-auto px-5 py-6 md:py-8">
    <!-- Title and Filter Row -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-4">
      <!-- OUR WORK Title (3 columns) -->
      <div class="lg:col-span-3">
        <h1 class="text-[#6e59f6] text-lg font-bold uppercase tracking-wide  mb-3">OUR WORK</h1>


          <input type="text" id="search-input" placeholder="Search..." class="w-full bg-transparent border-b border-[#AAA] text-[#193349] placeholder-gray-500 focus:outline-none focus:border-[#6e59f6] pb-1 pt-1" />
          
      </div>
      
      <!-- Research Theme Filter (3 columns) -->
      <div class="lg:col-span-3">
        <h3 class="text-[#6e59f6] text-lg font-bold uppercase tracking-wide mb-3">BY RESEARCH THEME</h3>
        <div>
          {% for theme_hash in site.data.research_theme %}
            {% assign theme = theme_hash[1] %}
            <button class="research-theme-btn inline-block px-2 py-1 rounded-lg border border-[#193349] bg-[#193349] text-white text-xs font-medium hover:border-[#BBBBBB] hover:bg-white hover:text-black transition-colors mr-2 mb-1" data-theme="{{ theme_hash[0] }}">{{ theme.title }}</button>
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
                <button class="tag-btn inline-block px-2 py-1 rounded-lg border border-[#193349] bg-[#193349] text-white text-xs font-medium hover:border-[#AAAAAA] hover:bg-white hover:text-black transition-colors mr-2 mb-1" data-tag="{{ tag }}">{{ tag }}</button>
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
        <div class="sm:col-span-1 lg:col-span-3 mb-6 lg:mb-0">
          {% if work.images and work.images.size > 0 %}
            <div class="mb-4">
              <img src="/imgs/works/{{ work.slug }}/{{ work.images.first }}" alt="{{ work.title }}" class="w-full object-cover rounded">
            </div>
          {% endif %}
          
          <!-- Research Theme Buttons -->
          {% if work.research_themes %}
            <div class="flex flex-wrap gap-0 mb-1">
              {% for theme_key in work.research_themes %}
                {% assign theme = site.data.research_theme[theme_key] %}
                {% if theme %}
                  <span class="research-theme-btn inline-block px-2 py-1 rounded-lg border border-[#193349] bg-[#193349] text-white text-xs font-medium hover:border-[#BBBBBB] hover:bg-white hover:text-black transition-colors mr-2 mb-1">{{ theme.title }}</span>
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
                    <img src="/imgs/people/{{ person.photo }}" alt="Profile of {{ person.first_name }}" class="w-6 h-6 rounded-full object-cover">
                  </div>
                {% endif %}
              {% endfor %}
            </div>
          {% endif %}
         
        </div>
      {% endfor %}
    </div>
  </section>

  <!-- Team Section -->
  <section id="team" class="max-w-7xl mx-auto px-5 py-8 md:py-16">
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
               <img src="/imgs/people/{{person.photo}}" alt="Headshot of {{person.first_name}} {{person.last_name}}" class="w-full rounded-full ">
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

  <!-- Interested in Joining Section -->
  <section class="max-w-7xl mx-auto px-5 py-8 md:py-16">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="lg:col-span-3 mb-4 lg:mb-0">
        <h2 class="text-[#6e59f6] text-xl md:text-2xl font-bold">Interested in joining?</h2>
      </div>
      <div class="lg:col-span-6">
        <p class="text-gray-600">We're always looking for passionate researchers and collaborators who share our vision for urban justice and technology. Get in touch to learn more about opportunities.</p>
      </div>
    </div>
  </section>
