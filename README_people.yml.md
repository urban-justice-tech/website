# People.yml Structure Guide

This document explains how to safely use the `_data/people.yml` file with HTML links and multiple columns.

## Structure

Each person entry should follow this structure:

```yaml
person_key:
  name: Full Name
  first_name: First
  last_name: Last
  url: https://example.com
  title: Job Title
  affiliation: Institution
  description: |
    <a href="https://example.com">Name</a> is a description with HTML links.
    
    Multiple paragraphs are supported with the YAML pipe operator (|).
```

## Safe HTML Links

The description field supports HTML links safely:

- Use the YAML pipe operator (`|`) for multi-line descriptions
- HTML links are automatically rendered and styled
- Links are sanitized by Jekyll's markdownify filter
- CSS provides hover effects for better UX

## Multiple Columns

The template automatically handles multiple columns:

- **Mobile**: 1 column (pure-u-1)
- **Tablet**: 2 columns (pure-u-md-1-2)  
- **Desktop**: 3 columns (pure-u-lg-1-3)

## Adding New People

1. Add a new entry to `_data/people.yml`
2. Include a profile image at `/imgs/people/{person_key}.jpg`
3. The template will automatically display the new person

## Example

```yaml
researcher:
  name: John Smith
  first_name: John
  last_name: Smith
  url: https://johnsmith.com
  title: Postdoctoral Researcher
  affiliation: University of Michigan
  description: |
    <a href="https://johnsmith.com">John Smith</a> is a researcher specializing in urban analytics.
    
    His work focuses on developing new methods for analyzing urban mobility patterns.
```

## Security Notes

- HTML in descriptions is processed through Jekyll's markdownify filter
- Links are styled with CSS for consistent appearance
- The structure prevents XSS attacks through proper sanitization 