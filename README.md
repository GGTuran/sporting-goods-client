
---

# Home Of Sports Frontend



[Live Link](https://home-of-sports.vercel.app/)

## Introduction
This frontend application is designed to support an e-commerce platform specializing in selling sporting goods. It offers a visually appealing and intuitive interface to ensure a seamless and enjoyable shopping experience for customers. With user-friendly navigation, responsive design, and interactive features, this system is particularly beneficial for sports enthusiasts and professionals looking for a variety of sporting goods. Administrators will find powerful tools for managing products, orders, and user interactions effectively.

## Project Description

This project involves the development of a dynamic frontend application for an e-commerce platform that specializes in selling sporting goods. The application is designed to offer an engaging and user-friendly interface, managing product displays, shopping carts, orders, and payments. It aims to create a seamless and enjoyable online shopping experience for customers while providing intuitive management tools for administrators. With responsive design and interactive features, the frontend ensures accessibility and ease of use across various devices, making it ideal for sports enthusiasts and professionals seeking a variety of sporting goods.

## Features

- An user can create,update and delete a product from database
- Allows user to filter,sort,search specific products
- Allows user to add product items in the cart 
- Allows an user to order one product or multiple product at a time

## Technology Stack

- Programming Language: TypeScript
- Frontend Framework: React (using Vite for build tooling)
- Routing: React Router DOM
- Styling: Tailwind CSS
- UI Components: ShadCN
- State Management: Redux Toolkit
- Data Fetching: RTK Query
- State Persistence: Redux Persist
- Animations: Framer Motion


### Prerequisites

- Node.js
- npm(or yarn)


### Installation Steps

**Follow this simple step to clone the project:**

```bash
git clone  https://github.com/GGTuran/sporting-goods-client
```

**Now install the dependencies of the project:**

```bash
npm install
```


### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add necessary configuration variables in the `.env` file.
   Example:


```bash
    
    DATABASE_URL=backend_url
   
 ```

## Start the server

**You can run the server in development mode**

```
npm run dev
```


## Project Structure



- **src/**: Contains application source code, including Redux services.
- **components/**: Contains React components.
- **pages/**: Contains React.js pages.
- **redux/**: Contains Redux slices and api.
- **routes/**: Contains all routing.
- **types/**: Contains all type.








## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of an API request. Common status codes include:

- `200 OK`: The request was successful.
- `201 Created`: The resource was successfully created.
- `400 Bad Request`: The request could not be understood or was missing required parameters.
- `401 Unauthorized`: Authentication failed or user does not have permissions for the requested operation.
- `403 Forbidden`: Authentication succeeded but authenticated user does not have access to the requested resource.
- `404 Not Found`: The requested resource could not be found.
- `500 Internal Server Error`: An error occurred on the server..