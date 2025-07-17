---
title: Publications
layout: page
---

<div>
  {% assign pubYears = site.pubs | group_by: "year" | sort: "name" | reverse %}
  {% for year in pubYears %}

    {% assign pubs = year.items | sort: 'date' | reverse %}
    {% for pub in pubs %}
    {% assign url = pub.external_url | default: pub.url | relative_url | replace: 'index.html', '' %}
      <div>
        <a href="{{ url }}">{{ pub.title }}</a>
      </div>
    {% endfor %}
  {% endfor %}
</div>