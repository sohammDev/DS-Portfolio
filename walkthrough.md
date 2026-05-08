# Portfolio Project Walkthrough & Technical Details

This document outlines everything we built for your personal portfolio. Review this to be fully prepared for any interview questions regarding the architecture, design choices, and code implementation.

## 1. System Architecture (The "Stack")
We built a **Full-Stack web application** using the **PERN/MERN-adjacent** stack, specifically swapping Mongo/Postgres for MySQL.
- **Frontend**: React.js (Bootstrapped with Vite for extremely fast HMR and optimized builds).
- **Backend**: Node.js with Express.js.
- **Database**: MySQL.

### *Why this stack?*
- **Vite over Create React App**: Vite uses native ES modules, making local server start times and hot reloads nearly instant compared to Webpack.
- **Node/Express**: A lightweight and unopinionated backend that makes building RESTful APIs fast.
- **MySQL**: A robust relational database perfect for structured data like projects, skills, and chronological experience.

---

## 2. The Database Layer (MySQL)
We structured the data relationally to ensure your portfolio content is entirely dynamic rather than hardcoded in React.
- **`projects` table**: Stores `title`, `description`, `tech_stack` (comma-separated string), and URLs.
- **`experience` table**: Stores job roles, duration, and descriptions.
- **`skills` table**: Groups skills by `category` (Frontend, Backend, Data Science) with a `proficiency` integer for rendering progress bars.
- **`messages` table**: A dedicated table to store form submissions from the Contact section.

*Interview Tip*: If asked why `tech_stack` is a comma-separated string rather than a relational junction table, you can explain that for a simple portfolio read-only feature, denormalizing the tech stack into a single column reduces SQL JOIN complexity and improves read speeds.

---

## 3. The Backend API (Node + Express)
We built a REST API to serve your database content to the frontend.
- **`mysql2/promise`**: We used this library instead of the standard `mysql` because it allows us to use modern `async/await` syntax rather than callback hell.
- **Connection Pool**: Rather than opening and closing a single connection, we created a `mysql.createPool()`. This allows multiple concurrent requests to be handled efficiently without crashing the database.
- **CORS**: We implemented the `cors` middleware because the React frontend (running on port 5173) and the Express backend (running on port 5000) operate on different origins. Without CORS, the browser would block the API requests.

### API Endpoints:
- `GET /api/projects`, `GET /api/skills`, `GET /api/experience`: Fetches data ordered by specific metrics (e.g., `ORDER BY proficiency DESC`).
- `POST /api/contact`: Accepts `{ name, email, message }`, validates that all fields exist, and `INSERT`s them into the database securely using parameterized queries (which prevents SQL Injection attacks).

---

## 4. The Frontend (React)
The frontend is a Single Page Application (SPA) that acts as the presentation layer.

### State Management & Data Fetching
- We used `useState` and `useEffect` hooks in `App.jsx`.
- When the component mounts (`[]` dependency array), we fire `axios.get` requests to the backend.
- **`Promise.all()`**: Instead of fetching projects, then waiting, then fetching skills, we wrapped all three API calls in `Promise.all()`. This fetches all the data concurrently, significantly reducing the initial page load time.

### Component Breakdown
- **`Hero.jsx`**: Features a highly custom, purely SVG-drawn character. Drawing the character in SVG (math-based vectors) rather than importing a PNG makes the site load faster, scale perfectly on 4K monitors without pixelating, and allows us to use exact CSS variables for colors.
- **`Projects.jsx`**: Renders a CSS Grid of projects. We used `react-parallax-tilt` to apply a complex 3D rotation matrix based on mouse coordinates, giving the cards a glassmorphic/physical feel.
- **`Skills.jsx`**: Takes the flat array of skills from the API and uses a `reduce` function to group them dynamically by their `category`. It then maps over these groups to render animated progress bars.
- **`Contact.jsx`**: A controlled form that tracks input state and submits via Axios. It tracks `submitting` state to disable the button and prevent double-submissions.

---

## 5. UI/UX & Animations
We migrated the design to an **Architectural High-Tech** aesthetic based on premium Wix templates.
- **CSS Variables**: All colors (`--bg-dark`, `--accent-primary`, etc.) are stored in `:root` variables in `index.css`. This is excellent for maintainability and makes it trivial to add a "Light Mode" later if desired.
- **Framer Motion**: We created a reusable `<AnimatedSection />` wrapper. It uses Intersection Observers (`whileInView`) to detect when a user scrolls to an element, triggering a smooth upward reveal transition. This drastically improves the perceived value of the site.
- **Glitch Text Effect**: Created using CSS pseudo-elements (`::before` and `::after`). We duplicate the text, clip it using `clip: rect()`, and offset it by a few pixels using CSS `@keyframes` to create a cyberpunk terminal glitch effect.
