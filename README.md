# KuglerStore — React E-commerce

## Features (Frontend + Backend)

### Frontend

Product listing with search and filters (name, category, price, rating)

Product detail page with related products

Favorites & Cart with quantity, subtotal, and total (cart stored in local storage)

Multi-step checkout with progress tracking (Submission → Payment → Confirmation)

Dark / Light mode toggle

Responsive layout (Bootstrap + custom CSS)

Animations and transitions



### Backend

Authentication system with:

Register (username, email, password)

Login

Logout

Token verification (JWT in cookies)

Password encryption with bcrypt

Session handling using jsonwebtoken + cookies

Validation layer with zod (schemas for register & login)

Middleware for request validation and protected routes

MySQL database with users table

---

## Code Organization
Frontend

/SHOP/Components → reusable UI components

/SHOP/Pages → main views (Login, Register, Shop, Cart, etc.)

/SHOP/Hooks → custom hooks (useHandleform, useAuthredirect)

Context API for auth, cart, favorites, filters

Backend

/controllers → business logic (auth controller)

/routes → API endpoints (/login, /register, /logout, /verify)

/middlewares → validation + authentication guard

/schemas → Zod schemas for input validation

/db → MySQL pool & queries

index.js → Express server setup (CORS, JSON parser, cookie-parser, routes)

---

## Tech stack
Frontend

React (functional components + hooks)

React Router DOM

Context API

Bootstrap 5

React Icons

Vite

Backend

Express.js

MySQL

bcrypt 

jsonwebtoken 

cookie-parser 

cors

zod 

---

## API Endpoints (Auth)
Method	Endpoint	Description
POST	/register	Create new user
POST	/login	Login and issue cookie
POST	/logout	Clear auth cookie
GET	/verify	Verify JWT & return user

---

## Deployment

Frontend → Vercel

Backend → Railway / Render

---

## Author
Maximo Kugler — Fullstack Developer
GitHub: https://github.com/Maximo862
Email: Maximokugler9@gmail.com




