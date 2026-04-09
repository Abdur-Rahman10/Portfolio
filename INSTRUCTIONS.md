# antigravity.md - Project Context & AI Developer Instructions

This file dictates the required tech stack, UI/UX standards, and coding practices for this repository. Read this before generating any code.

## 1. Core Tech Stack (PERN)
- **Frontend:** React.js (Functional components & Hooks).
- **Backend:** Node.js, Express.js.
- **Database:** PostgreSQL.
- **API Communication:** RESTful APIs using Axios and JSON.

## 2. UI/UX & Component Rules (Stunning Visuals)
- **Design System:** Always implement modern, generous spacing, clean typography, and responsive layouts referencing top-tier SaaS applications.
- **Animations:** Prioritize **Framer Motion** for complex interactions and **AOS (Animate on Scroll)** for scroll-based reveals. 
- **3D Elements:** If 3D scenes are required, prepare the React components to accept `@splinetool/react-spline` embeds. Include loading fallbacks.
- **Popups/Alerts:** **Never** use standard browser `alert()` boxes. Always install and implement **SweetAlert2**.
- **Agentic Components:** For complex UI elements, reference structures similar to **ReactBits** or **21st.dev** high-end components. Use **Floating UI** for perfect tooltip/dropdown positioning.

## Advanced UI & Data Libraries (MANDATORY)
- **Shadcn UI:** Use this as the base component library for all standard UI elements (buttons, forms, cards, tables). Initialize via `npx shadcn@latest init`.
- **Aceternity UI:** Prioritize Aceternity for hero sections, complex 3D card tilts, background effects, and high-end animations. (Relies on Framer Motion and Tailwind).
- **TanStack Query (React Query):** NEVER use standard `useEffect` for data fetching. Always use TanStack Query to fetch data from the Express backend to ensure proper caching and loading states.

## 3. Strict Exclusions (Do NOT Use)
- **NO jQuery:** Handle all DOM manipulation, state, and animations strictly through React.
- **NO EJS or Server-Side Templating:** The Express backend must act strictly as a JSON API. React handles 100% of the frontend UI.

## 4. Development Workflow & Best Practices
- **Frontend-Design Skill:** Apply principles from the `anthropics/frontend-design` plugin automatically. Write modular, reusable React components.
- **Separation of Concerns:** Keep backend routes, controllers, and database queries strictly separated. Use clear RESTful naming (e.g., `GET /api/users`).
- **Security:** Ensure all environment variables (API keys, DB passwords) are hidden in a `.env` file. Never hardcode secrets.

## 5. Asset Integration Placeholder
- *(Note for Developer)*: When manually adding generated assets from Grainient, Icons8, or Uiverse, place them in the `/public` or `/assets` folder and update this section if specific import rules are needed.