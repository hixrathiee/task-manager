# Task Manager App

A simple **Full Stack Task Manager Application** that allows users to create, view, update, and delete tasks.
This project demonstrates a basic **CRUD application** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.

---

## Features

* Add new tasks
* View all tasks
* Mark tasks as **Completed**
* Delete tasks
* Filter tasks by:
  * All
  * Pending
  * Completed
* Task status badges
* Task creation timestamp
* Success message after adding a task
* Responsive UI using **Tailwind CSS**

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## Project Structure

```
task-manager
│
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── taskController.js
│   ├── models
│   │   └── Task.js
│   ├── routes
│   │   └── taskRoutes.js
│   ├── .env
│   └── server.js
│
├── frontend
│   └── src
│       └── App.jsx
│
└── README.md
```

---

## Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/hixrathiee/task-manager.git
cd task-manager
```

---

## Backend Setup

Navigate to the backend folder:

```
cd backend
```

Install dependencies:

```
npm install
```

Create a `.env` file inside the backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_url
```

Start the backend server:

```
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## Frontend Setup

Navigate to the frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start the frontend server:

```
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## API Endpoints

### Get All Tasks

```
GET /api/tasks
```

### Create Task

```
POST /api/tasks
```

Request Body:

```
{
  "title": "Task title",
  "description": "Task description"
}
```

### Mark Task as Completed

```
PATCH /api/tasks/:id
```

### Delete Task

```
DELETE /api/tasks/:id
```

---

## Screenshots

(Add screenshots of the application UI here)

Example:

```
Task Manager Dashboard
Add Task Interface
Task List with Status
```

---

## Future Improvements

* Edit existing tasks
* User authentication
* Task deadlines
* Task priority levels
* Deployment with Docker

---

## Author

**Anjali Rathi**

Full Stack Developer
Skilled in MERN stack, JavaScript, Node.js, React.js, and backend development.
