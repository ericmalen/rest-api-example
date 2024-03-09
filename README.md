# REST API Example with Router-Controller-Service Pattern

This is a simple demonstration of a RESTful API built using the router-controller-service pattern. The API consists of endpoints for managing users and groups.

## Overview

The router-controller-service pattern is a software design pattern commonly used in web applications to achieve separation of concerns and improve code maintainability. In this pattern, the application logic is divided into three layers:

- **Router**: Defines API endpoints and routes incoming requests to the appropriate controller.
- **Controller**: Handles incoming requests, interacts with the service layer to perform business logic, and sends back responses to the client.
- **Service**: Contains the business logic of the application, performs CRUD operations on the data, and interacts with the database or external services.

## Structure

The API is structured into the following components:

- **Routes**: Defines API endpoints and routes requests to corresponding controllers.
- **Controllers**: Handles requests from the routes, invokes appropriate service methods, and sends back responses.
- **Services**: Contains the business logic for manipulating data and interacts with the database.

## Usage

1. Install dependencies:
   npm i

2. Start the server:
   npm start

3. The API will be accessible at `http://localhost:3000`.

## Endpoints

- **Users**:
- `GET /users`: Get all users
- `GET /users/:id`: Get a specific user by ID
- `POST /users`: Insert a new user

- **Groups**:
- `GET /groups`: Get all groups
- `GET /groups/:id`: Get a specific group by ID
- `POST /groups`: Insert a new group

## Testing

To test the API endpoints, you can use tools like Postman or cURL. Here's an example of how to test the `/users` endpoint:

1. Open Postman.
2. Set the request type to `POST`.
3. Enter the URL `http://localhost:3000/users`.
4. Add the required request body parameters (if any).
5. Click on the `Send` button to make the request.
6. You will receive a response indicating the success or failure of the request.

You can test other endpoints by changing the request type and URL accordingly.

## Dependencies

- Express.js: Backend framework for handling HTTP requests and routing.
