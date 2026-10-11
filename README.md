# Hema Narendra Reddy – Data Analyst Portfolio

React + Vite + React Router portfolio (same stack as the original).

## Run locally
```bash
npm install
npm run dev
```

## Build for hosting
```bash
npm run build      # output in /dist
```
Deploy `dist` on Vercel / Netlify (SPA rewrites are already included via `vercel.json` and `public/_redirects`).

## Editing content
Everything (name, summary, skills, education, projects, certifications, links) is in **`src/data/profile.js`**.
- Profile photo: replace `src/assets/profile.jpg`
- Resume: replace `public/Hema_Narendra_Reddy_Resume.pdf`
- Colors / fonts: design tokens at the top of `src/styles/global.css`
