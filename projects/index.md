---
title: Projects
layout: page
---

<div>
  {% assign projectYears = site.projects | group_by: "year" | sort: "name" | reverse %}
  {% for year in projectYears %}

    {% assign projects = year.items | sort: 'date' | reverse %}
    {% for project in projects %}
    {% assign url = project.external_url | default: project.url | relative_url | replace: 'index.html', '' %}
      <div>
        <a href="{{ url }}">{{ project.title }}</a>
      </div>
    {% endfor %}
  {% endfor %}
</div>