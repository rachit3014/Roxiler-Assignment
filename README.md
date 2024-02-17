# RoxilerSystems

This project is a Transactions Management System that allows users to view, search, and analyze transaction data. The system provides various features such as viewing transactions, generating statistics, and visualizing data through bar and pie charts.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Backend API Endpoints](#backend-api-endpoints)
6. [Frontend Components](#frontend-components)
7. [Screenshots](#screenshots)

## Introduction

The Transactions Management System is designed to facilitate the handling and analysis of transaction data. Users can interact with both backend API endpoints and a frontend application to view, search, and visualize transaction information.

## Features

- View a paginated list of transactions.
- Search transactions based on keywords.
- Generate statistics for a selected month, including total sale amount, total sold items, and total not sold items.
- Display a bar chart showing the distribution of transaction amounts within specified price ranges.
- Show a pie chart illustrating the distribution of items across different categories.

## Technologies Used

- Backend: Node.js, Express.js,MongoDB
- Frontend: React.js
- Chart Library: Recharts

## Getting Started

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git

# Navigate to the backend directory
cd Backend

# Install dependencies
npm install

# Start the backend server
npm start
```

### Frontend Setup

```bash
# Navigate to the frontend directory
cd Frontend/roxiler/

# Install dependencies
npm install

# Start the frontend application
npm start
```

## Backend API Endpoints

### 1. List Transactions

- **Endpoint:** `/api/transactions`
- **Method:** GET
- **Parameters:**
  - `month` (string): Selected month (e.g., '03' for March)
  - `search` (string): Search query for filtering transactions
  - `page` (number): Current page for pagination

### 2. Transaction Statistics

- **Endpoint:** `/api/statistics`
- **Method:** GET
- **Parameters:**
  - `month` (string): Selected month

### 3. Bar Chart Data

- **Endpoint:** `/api/bar-chart`
- **Method:** GET
- **Parameters:**
  - `month` (string): Selected month

### 4. Pie Chart Data

- **Endpoint:** `/api/pie-chart`
- **Method:** GET
- **Parameters:**
  - `month` (string): Selected month

## Frontend Components

### 1. Transactions Table

The transactions table component displays a paginated list of transactions. Users can search for specific transactions and navigate through pages.And by default the month is March is selected.

### 2. Statistics

The statistics component provides a summary of key metrics for the selected month, including total sale amount, total sold items, and total not sold items.

### 3. Bar Chart

The bar chart component visualizes the distribution of transaction amounts within specified price ranges for the selected month.

### 4. Pie Chart

The pie chart component illustrates the distribution of items across different categories for the selected month.

## Screenshots

Default month selected

Statistics and Bar Chart of default month

Pie Chart of default month
