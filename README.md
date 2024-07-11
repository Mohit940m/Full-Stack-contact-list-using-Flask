Project Title: Contact List.
Project Description: It's a basic Contact List app.
Installation Instructions: Steps to set up the project locally.
Usage Instructions: simple run main.py from the backend folder, go to the frontend folder on your code editor and in the terminal type "npm run dev"
Technologies Used: I used Flask for the backend and Vue.js for the front end.
# Full Stack Contact List Application

This project is a tutorial on building a full-stack application using Python and JavaScript. The goal is to create a simple CRUD application (Create, Read, Update, Delete) that allows users to manage a contact list.

## Project Structure

The project is divided into two main parts:
- Backend (Python)
- Frontend (JavaScript)

## Prerequisites

Ensure you have the following installed on your system:
- Python 3.x
- Node.js
- npm (Node Package Manager)
- Visual Studio Code (VS Code)

## Setup in VS Code

1. Open VS Code.
2. Open the folder where you want to create the project.

## Backend (Python)

### Setup

1. Create a folder named `backend` within your project directory.
2. Open a terminal in VS Code (``Ctrl+` ``).
3. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

4. Create a virtual environment and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

5. Install the necessary libraries:
    ```bash
    pip install Flask Flask-SQLAlchemy
    ```

### Define the API

1. Create the main application file (`app.py`) in the `backend` directory and define the API endpoints for CRUD operations on contacts.

### Run the Backend

1. Run the Flask application:
    ```bash
    flask run
    ```

## Frontend (JavaScript)

### Setup

1. Create a folder named `frontend` within your project directory.
2. Open a new terminal in VS Code and navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

3. Install the necessary libraries:
    ```bash
    npm install react react-dom
    ```

### Create the React Application

1. Create a React application and design the user interface for adding, viewing, updating, and deleting contacts.

### Run the Frontend

1. Start the React application:
    ```bash
    npm start
    ```

## Running the Project

1. Ensure the backend server is running:
    ```bash
    flask run
    ```

2. Ensure the frontend server is running:
    ```bash
    npm start
    ```

3. Open your web browser and navigate to `http://localhost:3000` to use the application.

## Using VS Code for Development

- Use VS Code's integrated terminal to run commands for both backend and frontend.
- Install the Python extension for VS Code for better development experience.
- Install the ESLint and Prettier extensions for better JavaScript code quality.

## Conclusion

This project teaches the fundamentals of building a full stack application, including how to separate the frontend and backend functionalities, how they communicate with each other, and how to perform CRUD operations using an API
