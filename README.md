# SAT Math Tutoring Website (React)

Sleek React frontend for an SAT Math tutoring business, featuring a metallic animated hero effect and a structured SAT unit resource hub.

## Stack

- React + Vite
- Custom CSS
- React Bits inspired `MetallicPaint` component (JavaScript + CSS variant)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project structure

- `src/App.jsx` -> landing page + unit resource experience
- `src/components/MetallicPaint.jsx` -> metallic shader animation component
- `public/unit-plans/` -> SAT unit blueprints
- `public/templates/` -> reusable planner and error-log resources
- `content/` + `docs/` -> editable authoring source templates

## GitHub Pages

`vite.config.js` is configured with:

- `base: "/sat-math-tutoring/"`

If you deploy to a different repo or custom domain, update the `base` value first.
