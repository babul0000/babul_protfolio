# Babul Portfolio — Standalone Express.js & MongoDB Backend Server

A dedicated Node.js / Express backend supporting contact inquiries, project cost estimation, rate limiting, and optional MongoDB Atlas storage.

## 🚀 Quick Start

1. Navigate to the server folder:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Copy `.env.example` to `.env` and fill in your values (or run with defaults):
   ```bash
   cp .env.example .env
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Or start in production mode:
   ```bash
   npm start
   ```

The server will run on `http://localhost:5000`.

---

## 📡 API Endpoints

- `GET /api/health`: Server status and tech stack info.
- `POST /api/contact`: Receive and validate contact messages.
- `POST /api/estimate`: Dynamic project quotation calculation and persistence.
