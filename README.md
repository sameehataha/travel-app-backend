# 🏨 Hotel Booking Platform - Backend API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-5.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-9.x-brightgreen)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)

##  Overview

The **Travel App Backend** is a robust RESTful API built with Node.js, Express, and MongoDB. It powers the Travel App frontend by providing comprehensive hotel management, user authentication, wishlist functionality, and category management features.

###  Live URLs

| Service | URL |
|---------|-----|
| **Backend API** | [https://travel-app-backend-jrcu.onrender.com](https://travel-app-backend-jrcu.onrender.com) |
| **Frontend Application** | [https://travel-app-frontend-sigma.vercel.app](https://travel-app-frontend-sigma.vercel.app) |



##  Features

###  Authentication & Authorization
- User registration with encrypted password storage
- JWT-based authentication
- Secure login with mobile number/email
- Protected routes with token verification

###  Hotel Management
- Fetch all hotels with optional category filtering
- Get single hotel details by ID
- Bulk import hotel data to database
- Hotel categories management

###  Wishlist Functionality
- Add hotels to personal wishlist
- Remove hotels from wishlist
- View user's wishlist items
- Protected endpoints (requires authentication)

###  Category Management
- Fetch all hotel categories
- Bulk import categories to database



##  Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18.x | Runtime Environment |
| **Express.js** | 5.x | Web Framework |
| **MongoDB** | 9.x (Mongoose) | Database |
| **JWT** | 9.x | Authentication |
| **Crypto-JS** | 4.x | Password Encryption |
| **CORS** | 2.x | Cross-Origin Resource Sharing |
| **Dotenv** | 17.x | Environment Variables |
| **UUID** | 13.x | Unique ID Generation |



## 📁 Project Structure

travelappbackend/<br> 
├── config/ <br>
│ └── dbconfig.js # MongoDB connection configuration <br>
├── controllers/ <br>
│ ├── categoryController.js # Category CRUD operations <br>
│ ├── hotelController.js # Hotel CRUD operations <br>
│ ├── loginController.js # User login handler <br>
│ ├── singupController.js # User registration handler <br>
│ ├── singleHotelController.js # Single hotel retrieval <br>
│ └── wishlistController.js # Wishlist operations <br> 
├── data/ <br>
│ ├── hotels.js # Hotel seed data <br>
│ └── category.js # Category seed data <br>
├── middleware/ <br>
│ └── verifyUser.js # JWT verification middleware <br>
├── models/  <br>
│ ├── hotel-model.js # Hotel schema <br>
│ ├── category-model.js # Category schema <br>
│ ├── user-model.js # User schema <br>
│ └── wishlist-model.js # Wishlist schema <br>
├── routes/ <br>
│ ├── auth-router.js # Authentication routes <br>
│ ├── category-route.js # Category routes <br>
│ ├── categoryimport-route.js # Category import routes <br>
│ ├── dataimport-router.js # Hotel import routes <br>
│ ├── hotel-route.js # Hotel routes <br>
│ ├── singlehotel-route.js # Single hotel routes <br>
│ └── wishlist-router.js # Wishlist routes <br>
├── .env # Environment variables <br>
├── package.json # Dependencies & scripts <br>
└── server.js # Application entry point <br>



##  API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/register` | Register new user | ❌ |
| `POST` | `/login` | Login user | ❌ |

### Hotel Routes (`/api/hotels`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all hotels (supports `?category=value` filter) | ❌ |
| `GET` | `/:id` | Get single hotel by ID | ❌ |

### Category Routes (`/api/category`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all categories | ❌ |

### Wishlist Routes (`/api/wishlist`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/` | Add hotel to wishlist | ✅ |
| `GET` | `/` | Get user's wishlist | ✅ |
| `DELETE` | `/:id` | Remove hotel from wishlist | ✅ |

### Data Import Routes (Admin/Development)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/hoteldata` | Bulk import hotels to database | ❌ |
| `POST` | `/api/categorydata` | Bulk import categories to database | ❌ |

---

##  Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB instance
- npm or yarn package manager

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/sameehataha/travel-app-backend.git
cd travelappbackend
```

2. **Install dependencies**
npm install

3. **Create .env file in the root directory:**

