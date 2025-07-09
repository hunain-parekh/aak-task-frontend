# React Auth Frontend – Signup/Login with JWT (Vite + RTK Query + Tailwind CSS)

This project is a frontend for user authentication, built using **React**, **Vite**, and **Tailwind CSS**.  
It supports **Signup**, **Login**, and **Protected Dashboard** with **JWT Authentication**, powered by a Django REST API backend.

---

## 📦 Tech Stack

- **Frontend:** React (Vite + TypeScript)
- **State Management:** Redux Toolkit, RTK Query
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **API Handling:** Axios, RTK Query
- **Containerization:** Docker, Docker Compose
- **Environment Config:** Vite `.env` variables

---

## 📂 Features

- Signup & Login Forms
- JWT-based Login flow using RTK Query
- Global Auth State using Redux Slice
- Protected Dashboard route (redirects if not logged in)
- Token and user data persisted via `localStorage`
- Dockerized frontend for seamless deployment

---

## 🔧 Dependencies

Installed via `npm` and listed in `package.json`:

```txt
react
react-dom
react-router-dom
@reduxjs/toolkit
react-redux
react-hook-form
yup
react-toastify
tailwindcss
vite
```

Dev dependencies also include:

```txt
typescript
@types/react
@types/react-dom
postcss
autoprefixer
```

## 🚀 Getting Started

### 🔁 Option 1: Run Locally (Vite Dev Server)

#### 1. Clone the Repository

```bash
git clone https://github.com/hunain-parekh/aak-task-frontend.git
cd aak-task-frontend
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Set Up Environment

Create a `.env` file:

```env
VITE_API_URL=http://localhost:8000/api
```

#### 4. Start the Dev Server

```bash
npm run dev
```

#### ✅ App Running at:

- Dev Server: [http://localhost:5173](http://localhost:5173)

### 🐳 Option 2: Run with Docker

#### 1. Clone the Repository

```bash
git clone https://github.com/hunain-parekh/aak-task-frontend.git
cd aak-task-frontend
```

#### 2. Set Up Environment

Create a `.env` file:

```env
VITE_API_URL=http://localhost:8000/api
```

#### 3. Build Docker Image & Start Services

```bash
docker-compose build
docker-compose up
```

#### ✅ App Running at:

- Dev Server: [http://localhost:3000](http://localhost:3000)

## ✅ Pages

| Route          | Access    | Description                                 |
| -------------- | --------- | ------------------------------------------- |
| `/login`       | Public    | User Login Page                             |
| `/signup`      | Public    | User Registration Page                      |
| `/dashboard`   | Protected | Shows "Welcome {username}" if authenticated |
| `*` (Wildcard) | Redirect  | Any unknown route redirects to `/login`     |

> 🔐 Protected routing is implemented using a custom `ProtectedRoute` component, which checks JWT auth status from Redux (RTK Slice).

## ✍️ Author

- **Name:** Hunain Parekh
- **GitHub:** [github.com/hunain-parekh](https://github.com/hunain-parekh)
- **Email:** hunainparekh85@gmail.com

---

## 📝 Assigned By

- **Name:** AAK Team
- **Role:** Task Assignment for Auth Frontend
- **Date:** 08 July 2025
