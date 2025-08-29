# Teach Layout Documentation

This directory contains the components and documentation for the teaching page layout.

## Overview

The teach layout provides a structured way to display teaching philosophy and course information using data from `_data/teach.yml`.

## Files

- `_layouts/teach.liquid` - Main layout file for teaching pages
- `_data/teach.yml` - Data file containing teaching information
- `_sass/_teach.scss` - Custom styling for the teach layout
- `_pages/teaching.md` - Example page using the teach layout

## Data Structure

### Teaching Philosophy
```yaml
philosophy:
  title: "Teaching Philosophy"
  description: "Description of teaching approach"
  principles:
    - name: "Principle Name"
      description: "Principle description"
```

### Current Courses
```yaml
current_courses:
  - year: "2025"
    academic_year: "2025 Academic Year"
    courses:
      - code: "COURSE123"
        name: "Course Name"
        university: "University Name"
        role: "Role"
        term: "Term"
        level: "Level"
        faculty: "Faculty"
        credit_points: 6
        description: "Course description"
        topics:
          - "Topic 1"
          - "Topic 2"
```

## Usage

1. Set the layout in your markdown file:
   ```yaml
   ---
   layout: teach
   title: "Teaching"
   ---
   ```

2. The layout will automatically render:
   - Teaching philosophy with principles in cards
   - Current courses with basic information visible
   - Expandable sections for course descriptions and topics
   - Responsive design for mobile and desktop

## Features

- **Responsive Design**: Optimized for all screen sizes with adaptive layouts
- **Interactive Elements**: Hover effects and animations
- **Collapsible Course Details**: Course description and topics are hidden by default in expandable sections
- **Theme Support**: Automatically adapts to light/dark themes using CSS variables
- **Structured Layout**: Clear organization of information
- **Custom Styling**: Professional appearance with custom CSS
- **Data-Driven**: Easy to update content via YAML files
- **No Scrollbars**: Clean interface without unnecessary scrollbars in philosophy section

## Customization

You can customize the appearance by modifying `_sass/_teach.scss`:
- Colors and typography (using CSS variables for theme support)
- Card layouts and spacing
- Animations and transitions
- Responsive breakpoints and mobile optimization
- Theme-specific styling
- Philosophy section layout and spacing

## Dependencies

- Font Awesome icons
- Bootstrap CSS framework
- Custom SCSS variables
