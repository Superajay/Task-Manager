Task Management Application

This is a full-stack task management application that allows users to create, update, delete, and filter tasks. Tasks can be categorized by their status (e.g., "To Do," "In Progress," "Done"), and users can view and manage them through an interactive UI. The backend is powered by Node.js and MongoDB, while the frontend is built with React.

Features

Add tasks with a title, description, and status.

Update task status or delete tasks.

Filter tasks by status using a dropdown.

Restrict task creation to ensure no more than 50% of tasks are in the "To Do" status.

Fully responsive and user-friendly interface.

Prerequisites

Ensure the following tools are installed:

Node.js

MongoDB (Local or Atlas Cloud Instance)

Git

Setup Instructions

1. Clone the Repository

git clone <repository-url>
cd <repository-folder>

2. Backend Setup

Navigate to the Backend Directory:

cd backend

Install Dependencies:

npm install

Configure Environment Variables:

Create a .env file in the backend directory with the following content:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/task_manager

Replace <username>, <password>, and <cluster-name> with your MongoDB credentials.

Start the Backend Server:

npm start

The backend will run on http://localhost:5000.

3. Frontend Setup

Navigate to the Frontend Directory:

cd ../frontend

Install Dependencies:

npm install

Update API URL:

Ensure the API URL in frontend/src/App.js matches your backend URL (e.g., http://localhost:5000).

Start the Frontend:

npm start

The frontend will run on http://localhost:3000.

4. MongoDB Setup

Option 1: Local MongoDB

Start MongoDB using:

mongod

Create the task_manager database:

use task_manager

Option 2: MongoDB Atlas

Create an account at MongoDB Atlas.

Set up a cluster and create a database.

Obtain the connection string and update the MONGO_URI in your .env file.

5. Testing the Application

Open http://localhost:3000 in your browser.

Add, update, delete, and filter tasks.

Verify data consistency in MongoDB.

6. Deployment

Frontend:

Build the React app:

npm run build

Deploy the build folder using services like Vercel, Netlify.

Backend:

Use hosting platforms like Render

Ensure the MONGO_URI in your environment variables points to a production MongoDB instance.

Technologies Used

Frontend

React.js

Axios for API requests

CSS for styling

Backend

Node.js

Express.js

MongoDB (Atlas or Local)

Tools

Git for version control

Postman for API testing

License

This project is licensed under the MIT License.

