# RentRegalia React Demo

RentRegalia is a front-end-only React + Vite + Tailwind CSS demo for a campus-focused graduation regalia rental service. It is designed for a student business, class presentation, or beginner portfolio project. The app uses mock content only and does not include a backend, database, or authentication.

## Features

- React Router multi-page experience for Home, About, FAQ, and Booking
- Reusable components for the navbar, hero, how-it-works, pricing, inventory, testimonials, FAQ, footer, and booking form
- Tailwind CSS styling with a clean navy, gold, white, and soft gray visual system
- Front-end-only booking form with validation, success state, and live price estimator
- Mock inventory, pricing, testimonials, and FAQ content stored in a shared data file
- Responsive layouts for mobile, tablet, and desktop

## Project structure

- `index.html` - Vite entry HTML
- `package.json` - project scripts and dependencies
- `tailwind.config.js` - Tailwind theme customization
- `postcss.config.js` - PostCSS setup for Tailwind
- `vite.config.js` - Vite config with React plugin
- `src/main.jsx` - React entry point
- `src/App.jsx` - route setup
- `src/index.css` - Tailwind imports and shared component classes
- `src/data/siteData.js` - mock data for pricing, inventory, testimonials, FAQ, and feature cards
- `src/components/` - reusable UI sections
- `src/pages/` - routed page components

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the Vite development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal.

## Deploy to GitHub Pages

This project is set up to work with GitHub Pages using `HashRouter`, which avoids route refresh issues on static hosting.

1. Create a GitHub repository and push this project to it.

2. Install dependencies:

```bash
npm install
```

3. Deploy the site:

```bash
npm run deploy
```

4. In your GitHub repository:

- Go to `Settings`
- Open `Pages`
- Set the source to the `gh-pages` branch if needed

Your public URL will usually look like:

```text
https://your-username.github.io/your-repository-name/
```

Note:

- Because this app uses `HashRouter`, page URLs on GitHub Pages will look like `/#/faq` and `/#/booking`.
- If you rename the repository later, the GitHub Pages URL will change too.

## Customize the demo

- Update business copy in `src/pages/` and `src/components/`.
- Edit mock pricing, inventory, testimonials, and FAQ content in `src/data/siteData.js`.
- Adjust colors, shared button styles, and layout utilities in `tailwind.config.js` and `src/index.css`.
- Add or remove routes in `src/App.jsx`.

## Notes

- This project is intentionally simple and beginner-friendly.
- The booking form does not submit real data.
- The copy is written to feel realistic and responsible for a campus-focused service. Students should still verify program requirements before booking.
