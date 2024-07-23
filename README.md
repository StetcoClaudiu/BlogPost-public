# My Blog Application

This project is a full-stack web application consisting of a backend built with Django REST Framework, a frontend created with React and Redux, and a PostgreSQL database. It features real-time updates using WebSockets and Django Signals to ensure that users are notified of changes in blog posts.

## Project Overview

### Architecture

- **Frontend**: Developed using React with Redux for state management. It includes:
  - User state management to determine if a user is logged in.
  - Option state for controlling visibility of edit and delete buttons for blogs.
  - Login/register state to manage the visibility of the login or registration popups.
  - BlogPost state to store blog data and minimize server requests.

- **Backend**: Built with Django REST Framework to provide API endpoints for interacting with blog posts and user data.

- **Database**: PostgreSQL to store user and blog post data.

- **Real-Time Updates**: Uses WebSockets and Django Signals to provide real-time notifications for blog post changes, including actions like update and delete.


## Getting Started

To set up and run the application, follow these steps:

### Prerequisites
Docker
Docker Compose
Setup
Build the Docker Containers

```bash
Copy code
docker-compose build
Start the Application
```
bash
Copy code
docker-compose up
Accessing the Application
Frontend: http://127.0.0.1:3000/
Backend: http://127.0.0.1:8000/
Features
User Authentication: Handles user login and registration.
Blog Management: Allows users to view, create, update, and delete blog posts.
Real-Time Updates: Uses WebSockets to notify clients of changes to blog posts.
WebSocket and Django Signals
The application utilizes WebSocket connections and Django Signals for real-time updates:

Actions:
Delete: Notifies clients about the deletion of a blog post, including the ID of the deleted post.
Update: Sends updates for blog posts, including new or updated data.
Screenshots
