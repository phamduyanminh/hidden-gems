# Hidden Gems

## Project Technical Tech Stack

- Template (Framewwork + Variant): React + TypeScript + SWC + Vite + PWA
- Map: Mapbox SDK
- Database: Supabase
- Hosting: Cloudfare Pages

## Project Setup - Run the following Commands in Order

1. `npm install`
   - Installs all dependencies listed in package.json

2. `npx tailwindcss init -p`
   - Initializes Tailwind CSS and creates tailwind.config.js and postcss.config.js

3. Update `postcss.config.js` to use `@tailwindcss/postcss`:

   ```javascript
   import tailwindcss from '@tailwindcss/postcss'
   import autoprefixer from 'autoprefixer'

   export default {
     plugins: [
       tailwindcss,
       autoprefixer,
     ],
   }
   ```

- ESLint Error: "A `require()` style import is forbidden" -> Ensure all imports use ES module syntax (`import` instead of `require()`)

## Command lines for this project

- To start: `npm run dev`
- To build: `npm run build`
- To review: `npm run preview`
- To lint, code quality check: `npm run lint`
