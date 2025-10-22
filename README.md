## TODO List

Backend & API

- [ ] User Authentication: Implement user registration and login endpoints.
- [ ] Authorization: Create middleware to secure admin-only API routes.
- [ ] Order Management: Build API endpoints to update and manage order statuses (e.g., "Processing", "Out for delivery").
- [ ] Input Validation: Add robust validation for all incoming API requests.
- [ ] User Profiles: Create endpoints for users to view and update their profile information.

Frontend (Customer App)

- [ ] Connect Authentication: Wire up the LoginForm component to the backend login/register endpoints.
- [ ] User Context: Create a global context to manage authenticated user state.
- [ ] Order History: Create a page for users to view their past orders.
- [ ] Payment Gateway: Integrate a payment gateway.
- [ ] UI Polishing: Add loading spinners, toast notifications for user feedback, and form validation messages.
- [ ] Light Mode: Fix the color contrasts.
- [ ] Sign out: Add a logout function.
- [ ] Fix Footer: Footer should stay at bottom

Admin Panel

- [ ] Display Products: Fetch and display all food items on the "List Products" page.
- [ ] Display Orders: Fetch and display all customer orders on the "Orders" page.
- [ ] Update Order Status: Add functionality for the admin to change the status of an order.
- [ ] Dashboard: Create a main dashboard with key stats (e.g., total revenue, new orders).

General & Deployment

- [ ] Testing: Write unit and integration tests for the backend and frontend components.
- [ ] Environment Variables: Ensure all secrets and environment-specific configurations are handled through .env files.
- [ ] Finalize Documentation: Write the final, detailed README.md for the project.
- [ ] Deployment: Plan and execute the deployment strategy (e.g., using Docker, Vercel, Netlify, Render).
