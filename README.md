# Food Delivery App

A full-stack food delivery application with a customer frontend, an admin panel, and a backend API. This repository contains the code and instructions to run the app locally, configure environment variables, run tests, and prepare for deployment.

## Table of contents
- Project overview
- Features
- Tech stack
- Repository layout
- Prerequisites
- Environment variables (what to set and examples)
- Local development (backend & frontend)
- Running in production / build
- Testing
- Deployment notes
- Troubleshooting
- Contributing
- License & contact

## Project overview
This project implements:
- User authentication and profiles
- Customer-facing product browsing, cart, checkout and order history
- Admin panel to manage products and orders
- REST API backend to handle authentication, orders, products and payments

Use this README to configure environment variables, run the services locally, and prepare for deploy.

## Features
Core implemented features:
- User registration / login (JWT)
- Product listing (admin & customer)
- Cart & checkout flow
- Order creation and status tracking
- Admin UI to list products (further admin features planned)

Planned / TODO:
- Admin authorization middleware
- Order management & status update endpoints
- Input validation improvements
- Use stripe webhooks for payment validation
- Testing and deployment automation

## Tech stack (example)
- Backend: Node.js + Express
- Database: PostgreSQL or MongoDB
- Auth: JSON Web Tokens (JWT), BCrypt for password hashing
- Frontend: React (Vite)
- Payment: Stripe

Adjust these to your actual stack; the environment variables below cover the typical options.

## Repository layout (suggested)
- /backend — Node.js/Express API
- /frontend — React customer app
- /admin — Admin panel (React)
- README.md

If your repo uses a different structure, adapt the paths accordingly.

## Prerequisites
- Node.js (LTS recommended)
- npm or yarn
- Database server (MongoDB)

## Environment variables

Important: Put secrets in .env files that are NOT committed to source control. For Git, add .env to .gitignore.

Backend (.env)
- MONGO_URI
- PORT=5000
- JWT_SECRET
- NODE_ENV="development"
- FRONTEND_URL="http://localhost:5173"
- BACKEND_URL="http://localhost:5174"
- STRIPE_SECRET_KEY=

Frontend
- VITE_BACKEND_URL="http://localhost:5000"

Admin
- VITE_BACKEND_URL="http://localhost:5000"

## Local development

1. Clone the repository
   git clone <repo-url>
   cd Foodiefly

2. Setup backend
   - cd backend
   - copy .env.example to .env and fill values
   - install dependencies: npm install
   - start dev server:
     npm run dev

3. Setup frontend
   - cd frontend
   - copy .env.example to .env and fill values
   - install dependencies: npm install
   - start dev server:
     npm run dev

4. Admin panel
   - Repeat the frontend steps in the admin folder.

5. Authentication flow
   - Register a user with the customer app.
   - Login returns a JWT http-only token used in Authorization headers for protected API calls.

## Running in production / build
- Backend: set NODE_ENV=production, ensure DATABASE_URL and secrets are set.
- Frontend: build with npm run build and serve static files via backend server.
- Use HTTPS in production and rotate secrets regularly.

## Troubleshooting
- "Invalid JWT / Unauthorized": verify JWT_SECRET matches between services and tokens are sent in headers.
- "Database connection refused": confirm DATABASE_URL is correct and database server is running and reachable.
- "Payment failures": check API keys and webhooks, and use test keys in development.
- If a UI still shows old state (cart count mismatch), clear localStorage or inspect API endpoints to ensure cart data is deleted properly.

## Contributing
- Fork and submit pull requests.
- Follow coding style and add tests for new features.
- Update README with instructions for any new env variables or scripts.

## License
- MIT

## Contact
For questions, open an issue in the repository.
