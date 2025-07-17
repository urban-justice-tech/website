---
layout: page
home: true
---

<p>
  Hi! Welcome!
</p>

<div id="people" class="pure-g">
  {% assign members = site.data.people | filter_alumni: nil | sort_people: 'Professor, Administrative', false %}
  {{ sort_people }}
  {% for person_hash in members %}
    {% assign person = person_hash[1] %}
    <div id="{{person_hash[0]}}">
      <a href="{{person.url}}">
        <p class="headshot"><img src="/imgs/people/{{person_hash[0]}}.jpg" alt="Headshot of {{person.first_name}} {{person.last_name}}" /></p>
        <p class="name">{{person.first_name}} {{person.last_name}}</p>
        <p class="title">{{person.title}}</p>
      </a>
    </div>
  {% endfor %}
</div>
