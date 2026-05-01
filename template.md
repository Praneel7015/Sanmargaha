# Website Template Reference (Same Format)

Use this template when creating a new website with the same structure and implementation style as this project.

## 1. Project Basics

- Project name:
- Brand/tagline:
- Primary audience:
- Primary CTA:
- Contact email:
- Contact phone:
- WhatsApp number (international format, no `+`):
- Office hours:

## 2. Required Pages

Create these pages:

- `index.html` (Home)
- `team.html` (About/Team)
- `courses.html` (Programs/Courses)
- `presence.html` (Locations/Presence)
- `blogs.html` (Blog list)
- `testimonials.html` (Testimonials)
- `contact.html` (Contact + enquiry form)

## 3. Standard File Structure

```text
.
|-- index.html
|-- team.html
|-- courses.html
|-- presence.html
|-- blogs.html
|-- testimonials.html
|-- contact.html
`-- assets/
    |-- css/
    |   `-- styles.css
    |-- js/
    |   |-- navigation.js
    |   |-- footer.js
    |   |-- main.js
    |   `-- optional-feature.js
    |-- img/
    |-- images/
    `-- fonts/
```

## 4. Global Navigation

Top nav items:

- Home
- Team/About
- Courses
- Our Presence
- Blogs
- Testimonials
- Contact

Implementation rules:

- Keep header sticky
- Support mobile hamburger menu
- Use shared nav component (`navigation.js`) for all pages

## 5. Footer Format

Footer should include:

- Brand summary
- Quick navigation links
- Program links
- Contact links:
  - `mailto:` email
  - `tel:` phone
  - WhatsApp chat URL: `https://wa.me/<number>`

Use shared footer component (`footer.js`) so all pages stay consistent.

## 6. Home Page Sections

Recommended order:

1. Hero (headline + subtext + primary CTA)
2. Trust/Stats section
3. Overview/value proposition
4. Highlighted programs/courses
5. CTA strip (contact/enrol)

## 7. Courses Page Pattern

Include:

- Filter controls (board/level/type)
- Card grid with data attributes for filtering
- Empty-state message when no cards match

Each course card should have:

- Title
- Short description
- Board/level labels
- CTA button

## 8. Presence Page Pattern

Include:

- Location cards (name, address, details)
- Optional map section
- Campus-specific CTA (call/contact)

## 9. Contact Page Pattern

Fields:

- Name (required)
- Contact number (required)
- E-mail (required)
- Query/message (required)

Do not add unrelated fields unless explicitly needed.

Enquiry delivery:

- Use form action endpoint or backend handler
- Keep destination email configurable

Example endpoint pattern:

```html
<form action="https://formsubmit.co/your-email@example.com" method="POST">
```

Contact page should also include:

- Phone, email, office hours
- “Chat on WhatsApp” button with WhatsApp SVG icon

## 10. Styling Conventions

- Single global stylesheet: `assets/css/styles.css`
- Use reusable utility/button classes
- Maintain responsive breakpoints for desktop/tablet/mobile
- Keep typography and spacing consistent across pages

Recommended button variants:

- Primary action
- Secondary outline
- Accent action
- WhatsApp action (green)

## 11. JavaScript Conventions

In `main.js`, keep page-wide behaviors modular:

- DOM helper methods
- header scroll state
- nav active state
- mobile menu
- reveal animations
- counters
- page-specific features (filters/map/form)
- back-to-top button

Guard each feature with null checks so scripts run safely on every page.

## 12. Launch Checklist

- All nav links work
- Footer links match latest contact info
- Contact form submits correctly
- WhatsApp links open correct number
- Mobile menu works
- Layout is responsive on small screens
- No placeholder content remains
- No broken image/script/style paths

## 13. Handover Notes

Before delivery, document:

- Final contact details used
- External services used (forms, maps, embeds)
- Files where shared content is managed (`navigation.js`, `footer.js`, `styles.css`)
- Any known limitations or TODOs
