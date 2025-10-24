## Repository snapshot

- Framework: React 19 + Vite (see `package.json`, `vite.config.js`).
- Entry point: `src/main.jsx` (renders `App` into `#root`).
- Router: `react-router-dom` v7 used in `src/App.jsx` (BrowserRouter, Routes/Route with `element` prop).
- Component layout: components are colocated under `src/assets/Component/` (e.g. `Header/Header.jsx` + `Header.css`).

## What to focus on when editing or adding code

- Start the dev server with `npm run dev` (Vite HMR).
- Build with `npm run build`. Preview an optimized build with `npm run preview`.
- Lint with `npm run lint` (project uses ESLint; see `eslint.config.js`).

- Add components under `src/assets/Component/<Name>/` to follow existing structure. Each component so far uses:
  - `<ComponentName>.jsx` (default export),
  - `<ComponentName>.css` alongside it and imported with a relative path (e.g. `import './Header.css'`).

- To add routes, import components in `src/App.jsx` and add `<Route path="/foo" element={<Foo/>} />` inside `<Routes>` (see `App.jsx`).

## Code patterns and gotchas (project-specific)

- Absolute `/` imports are used for public assets (e.g. `import viteLogo from '/vite.svg'` in `App.jsx`). Keep public assets in project root or `public/` so Vite resolves them.
- The repo uses a nonstandard component folder name `assets/Component` (capital C). New code should follow this casing to avoid path confusion on macOS vs other OSes.
- Files are JS/JSX (not TypeScript). Note there are `@types/*` devDependencies — this repo is still JS-first. Don't convert files to TS unless you update tooling and add a migration plan.

## Integration points

- Vite config: `vite.config.js` using `@vitejs/plugin-react` — avoid adding server-specific plugins without checking for HMR implications.
- React Router v7: `Routes` + `Route` with `element` prop (not `component`). Use component JSX in `element`.
- ESLint: run `npm run lint`. There is no auto-fix flag in the script; run `npx eslint --fix .` if seeking auto-fixes.

## Examples (explicit)

- Add a component
  - Create `src/assets/Component/MyWidget/MyWidget.jsx` and `MyWidget.css`.
  - Export default from `MyWidget.jsx` and import from `App.jsx` as `import MyWidget from './assets/Component/MyWidget/MyWidget'`.

- Add a route
  - In `src/App.jsx` inside `<Routes>` add: `<Route path="/widget" element={<MyWidget/>} />`.

## When in doubt

- Check `src/main.jsx` and `src/App.jsx` to understand render and routing patterns.
- Run the dev server (`npm run dev`) to validate HMR and quick visual feedback.

---
If any section feels incomplete or you'd like more examples (tests, CI, or TypeScript migration notes), tell me which area to expand.
