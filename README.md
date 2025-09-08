# Portfolio (Astro + Tailwind)

A personal portfolio site built with Astro, Tailwind CSS and DaisyUI. This repository contains the UI, components, and a client-side contact form wired to Web3Forms for easy email delivery.

## Quick start

Prerequisites: Node.js (v18+) and npm.

1. Install dependencies

   npm install
2. Run in development

   npm run dev
3. Build for production

   npm run build
4. Preview production build locally

   npm run preview

The exact scripts come from `package.json` and map to the installed `astro` commands.

## Important project details

- Frameworks: Astro + Tailwind CSS + DaisyUI.
- Icons: SVG icon components live under `src/components/icons/` and are imported as Astro components into cards and UI elements.
- Contact form: implemented in `src/components/FormContact.astro`. It uses FormData to POST to `https://api.web3forms.com/submit` to avoid CORS preflight and includes client-side validation.
- Rate limiting: the contact form has a client-side 1-minute rate limit stored in `localStorage` under the key `lastFormSubmit`.
- Modal previews: project images open in a JS-driven modal to avoid navigation jumps.
- Images: place any site images in `public/` and reference them with root-relative paths (for example `/me.jpg`).

## Project structure (high level)

- public/ — static assets (images, PDFs, favicon)
- src/components — Astro components used in the site (Navbar, Hero, Skills, Projects, Contact, etc.)
- src/components/icons — individual SVG icon components
- src/constants — project data like jobs, projects, and skill groups
- src/pages — top-level Astro pages (for example `index.astro`)

## How to test the contact form

1. Make sure `WEB3_FORMS_API_KEY` is set in `.env` (or configure a proxy endpoint).
2. Run `npm run dev`.
3. Open the site and submit the contact form. The UI will show validation messages and the result area. The form enforces a 1-minute client-side cooldown.

## Troubleshooting

- If icons fail to render, confirm the files exist under `src/components/icons` and imports use the correct filename.
- If images don't load, ensure they are in `public/` and referenced with a leading `/`.
- If the contact form reports a missing key or CORS errors, verify the env var is available and the fetch uses FormData (no custom JSON headers).

## Next steps / notes

- Verify environment variable prefixing for your hosting platform if you need client-side access.
