# Smart Leads Dashboard

Production-grade MERN SaaS CRM for managing sales leads with role-based access control (ADMIN / SALES).

## Stack

| Layer    | Technologies |
| -------- | ------------ |
| Frontend | React, TypeScript, Vite, Tailwind CSS, React Query, Axios, React Router, React Hook Form, Zod |
| Backend  | Node.js, Express, TypeScript, MongoDB, Mongoose, JWT, bcrypt |
| DevOps   | Docker, ESLint, Prettier |

## Project structure

```
smart-leads-dashboard/
├── client/                 # React SPA (pages → features → components)
│   └── src/
│       ├── app/            # Providers, router, app shell
│       ├── pages/          # Route-level pages
│       ├── features/       # Domain features (auth, leads, …)
│       ├── components/     # Shared UI
│       ├── hooks/
│       ├── lib/            # Axios, React Query, utilities
│       ├── types/
│       └── constants/
├── server/                 # Express API (controller → service → model)
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── services/
│       ├── models/
│       ├── routes/
│       ├── middleware/
│       ├── validators/
│       ├── types/
│       └── utils/
└── package.json            # Root scripts
```

## Getting started

### Prerequisites

- Node.js 20+
- npm 10+
- MongoDB (local or Atlas) — required from Phase 4 onward

### Install

```bash
# From repository root
npm install --prefix client
npm install --prefix server
```

### Environment

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

### Development

```bash
# Terminal 1 — API (port 4000; avoids macOS AirPlay on 5000)
npm run dev:server

# Terminal 2 — Frontend (port 5173)
npm run dev:client
```

- Frontend: http://localhost:5173
- API health: http://localhost:4000/api/health

## API response format

```json
{
  "success": true,
  "message": "Success",
  "data": {},
  "pagination": {}
}
```

## License

MIT
