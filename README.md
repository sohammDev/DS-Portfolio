# Full-Stack Personal Portfolio

A full-stack portfolio application built with React (Vite), Node.js, Express, and MySQL.

## Project Structure

- `/client` - React + Vite frontend
- `/server` - Node.js + Express backend
- `/database` - MySQL schema and seed data

## Prerequisites

- Node.js (v16+)
- MySQL Server

## Setup Instructions

### 1. Database Setup

1. Open your MySQL client (e.g., MySQL Workbench, DBeaver, or CLI).
2. Create a new database for your portfolio (e.g., `portfolio_db`).
3. Run the SQL script located in `database/schema.sql` to create the required tables.
4. (Optional) Run the SQL script located in `database/seed.sql` to populate the tables with placeholder data.

### 2. Backend Setup

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Copy the `.env.example` file to `.env` and fill in your MySQL database credentials:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=portfolio_db
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```
   *(Ensure you added a `"dev": "nodemon server.js"` script to your server package.json, or just run `npx nodemon server.js`)*

### 3. Frontend Setup

1. Open a new terminal and navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Deployment

- **Frontend**: Deploy the `/client` directory to Netlify or Vercel.
- **Backend**: Deploy the `/server` directory to Railway or Render.
- **Database**: Host your MySQL database on PlanetScale, Railway, or any preferred cloud SQL provider. Make sure to update the environment variables in your deployed backend to connect to the cloud database.
