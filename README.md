# Real-Time Chat Application

A full-stack real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO. It features user authentication, 1-on-1 messaging, user presence (online/offline), typing indicators, and a dark/light mode toggle.

---

## Screenshots

![Light Mode Chat](screenshots/light%20mode.png)
_Chat view in light mode_

![Dark Mode Chat](screenshots/dark%20mode.png)
_Chat view in dark mode_

![Login Page Dark Mode](screenshots/login%20page%20(dark%20mode).png)
_Login page in dark mode_

![Register Page Light Mode](screenshots/register%20page%20(light%20mode).png)
_Register page in light mode_

---

## Features

* **User Authentication:** Secure registration and login using JWT. Passwords are hashed.
* **Real-Time Messaging:** Instant 1-on-1 messaging via Socket.IO.
* **User Presence:** Real-time online/offline status display.
* **Last Seen:** Shows last active time for offline users.
* **Typing Indicators:** Real-time feedback when a user is typing.
* **User List:** Displays other registered users with their status.
* **Conversation History:** Loads previous messages when a chat is opened.
* **Password Visibility Toggle:** Show/hide password option on forms.
* **Form Validation:** Server-side validation with inline frontend error display.
* **Dark/Light Mode:** Manual theme switching via a toggle button, using CSS variables.

---

## Tech Stack

* **Frontend:**
    * React
    * Vite
    * Tailwind CSS (using CSS Variables)
    * Axios
    * Socket.IO Client
* **Backend:**
    * Node.js
    * Express.js
    * MongoDB (with Mongoose)
    * Socket.IO
    * JSON Web Token (JWT)
    * bcryptjs
    * express-validator
    * dotenv
    * cors
* **Database:**
    * MongoDB (Atlas recommended)

---

## Folder Structure

```
realtime-chat-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── messageController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │   └── rateLimiter.js
│   ├── models/
│   │   ├── Conversation.js
│   │   ├── Message.js
│   │   └── User.js
│   ├── node_modules/
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── messageRoutes.js
│   ├── socket/
│   │   └── socketHandler.js
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── node_modules/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatSidebar.jsx
│   │   │   └── MessageItem.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── ThemeProvider.jsx
│   │   ├── pages/
│   │   │   ├── Chat.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── socket.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/
│   ├── dark-mode.png
│   ├── light-mode.png
│   ├── login page (dark mode).png
│   └── register page (light mode).png
│
├── .gitignore
└── README.md
```

> **Note:** `node_modules/` and `.env` files are ignored by Git.

---

## Prerequisites

* Node.js (v18 or later recommended)
* npm (or yarn)
* MongoDB Connection String (e.g., from MongoDB Atlas or a local instance)

---

## Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/heavycoderyash/Real-time-Chat-Application.git
    cd Real-time-Chat-Application
    ```

2.  **Install Backend Dependencies:**
    ```bash
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

---

## Environment Variables Configuration

The backend requires environment variables for configuration.

1.  Navigate to the `backend` directory.
2.  Create a file named `.env`.
3.  Add the following variables to the `.env` file, replacing the placeholder values with your actual configuration:

    ```env
    # Server Port (e.g., 5001)
    PORT=5001

    # MongoDB Connection URI
    MONGODB_URI=your_mongodb_connection_string_here

    # JWT Secret Key (generate a strong random string)
    JWT_SECRET=your_strong_random_jwt_secret_here

    # JWT Token Expiration (e.g., 7d, 24h)
    JWT_EXPIRE=30d

    # Frontend URL (for CORS - typically http://localhost:5173 for Vite dev server)
    CLIENT_URL=http://localhost:5173
    ```

    **Important:**
    * Obtain your `MONGODB_URI` from your MongoDB provider (like Atlas).
    * Generate a secure `JWT_SECRET` (you can use `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` in your terminal).
    * Ensure `CLIENT_URL` matches the address where your frontend runs during development.
    * The `.gitignore` file is configured to prevent the `.env` file from being committed. **Never commit your `.env` file.**

---

## Running the Application

You need to run both the backend and frontend servers simultaneously in separate terminal windows.

1.  **Run the Backend Server:**
    * Navigate to the `backend` directory.
    * Run:
        ```bash
        npm run dev
        ```
    * The server will start (e.g., on port 5001).

2.  **Run the Frontend Server:**
    * Navigate to the `frontend` directory.
    * Run:
        ```bash
        npm run dev
        ```
    * The Vite development server will start (e.g., at `http://localhost:5173`).

3.  **Open the application:**
    * Open your web browser and go to the frontend URL (e.g., `http://localhost:5173`).
