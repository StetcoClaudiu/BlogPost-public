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

### Setup

Build the Docker Containers

```bash
docker-compose build
```
Start the Application

```bash
docker-compose up
```

### Accessing the Application

Frontend: http://127.0.0.1:3000/

Backend: http://127.0.0.1:8000/

### Features

User Authentication: Handles user login and registration.

Blog Management: Allows users to view, create, update, and delete blog posts.

Real-Time Updates: Uses WebSockets to notify clients of changes to blog posts.

### WebSocket and Django Signals

The application utilizes WebSocket connections and Django Signals for real-time updates:

Actions:

Delete: Notifies clients about the deletion of a blog post, including the ID of the deleted post.

Update: Sends updates for blog posts, including new or updated data.

## Screenshots
![Screenshot (47)](https://github.com/user-attachments/assets/60b269c0-a3d1-420c-a176-b35d4680f836)
![Screenshot (48)](https://github.com/user-attachments/assets/e2375164-1cd3-4ab2-a834-f7b5dce400b1)
![Screenshot (49)](https://github.com/user-attachments/assets/ee3e0625-8e34-463d-831f-e173f6bb8c49)
![Screenshot (50)](https://github.com/user-attachments/assets/fc4fd7ed-8a64-464a-a62f-dfd453e06ff8)
![Screenshot 2024-07-23 000243](https://github.com/user-attachments/assets/391c4112-610e-43f2-ba6b-6cdf3420bcf2)
