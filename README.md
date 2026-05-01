# Sanmargaha Website

Static multi-page website for Sanmargaha Educational Services.

## Project Overview

This repository contains a responsive website built with:

- `HTML` for page structure
- `CSS` for styling (`assets/css/styles.css`)
- `Vanilla JavaScript` for shared UI behaviors and dynamic inserts

Primary goals:

- Present Sanmargaha’s offerings and presence
- Collect contact enquiries
- Keep a lightweight, dependency-free frontend

## Pages

- `index.html` - Home
- `team.html` - Team / About
- `courses.html` - Courses and filters
- `presence.html` - Campus presence and map
- `blogs.html` - Blog listing
- `testimonials.html` - Testimonials
- `contact.html` - Contact details and enquiry form

## Folder Structure

```text
.
|-- index.html
|-- team.html
|-- courses.html
|-- presence.html
|-- blogs.html
|-- testimonials.html
|-- contact.html
|-- REQUIREMENTS.md
|-- template.md
`-- assets/
    |-- css/
    |   `-- styles.css
    |-- js/
    |   |-- navigation.js
    |   |-- footer.js
    |   |-- main.js
    |   `-- karnataka-map.js
    |-- img/
    |-- images/
    `-- fonts/
```

## Shared UI Components

- Navigation is mounted from `assets/js/navigation.js`
- Footer is mounted from `assets/js/footer.js`
- Generic interactions are handled in `assets/js/main.js`
  - sticky header
  - mobile menu
  - reveal animations
  - counters
  - courses filtering
  - contact form behavior
  - back-to-top button

## Contact Setup

Current contact settings:

- Contact form submits to: `sanmargaha@gmail.com`
- WhatsApp chat link: `https://wa.me/919535035059`
- Phone shown on site: `9535035059`
- Office hours: `9:00 AM to 6:00 PM, Monday to Friday`

If you change contact details, update both:

- `contact.html`
- `assets/js/footer.js`

## Local Development

No build step is required.

1. Open `index.html` directly in a browser, or
2. Serve the folder using a static server (recommended)

Example with Python:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Content and Styling Updates

- Edit page-specific content in each `.html` file
- Edit global styles in `assets/css/styles.css`
- Edit shared footer/nav content in `assets/js/footer.js` and `assets/js/navigation.js`

## Reference Spec

Original high-level website scope is documented in:

- [REQUIREMENTS.md](/REQUIREMENTS.md)
- [template.md](/template.md) for creating a new site in the same format
