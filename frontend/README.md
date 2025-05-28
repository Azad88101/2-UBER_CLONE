# 🚗 Uber Clone - Frontend

<div align="center">

![Uber Clone](https://img.shields.io/badge/Uber-Clone-000000?style=for-the-badge&logo=uber&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A modern ride-sharing application frontend built with React, featuring separate interfaces for users and drivers.

</div>

## 📋 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [Getting Started](#-getting-started)
- [Tech Stack](#-tech-stack)
- [Future Improvements](#-future-improvements)

## 🌟 Overview

A frontend implementation of an Uber-like ride-sharing app using **React**, **React Router**, and **Tailwind CSS**. The app provides two separate interfaces and authentication flows: one for **users** and one for **drivers (captains)**.

## ✨ Features

- 🚶‍♂️ **User Interface**
  - Modern, responsive design
  - Intuitive navigation
  - Seamless authentication flow

- 🚗 **Driver Interface**
  - Dedicated captain portal
  - Easy registration process
  - Secure authentication

## 📁 Project Structure

frontend/
└── src/
├── pages/
│ ├── UserHome.jsx
│ ├── User_Login.jsx
│ ├── User_signup.jsx
│ ├── Captain_Login.jsx
│ └── Captain_Signup.jsx
├── App.jsx
└── Context/
└── User_context.jsx

## 🧩 Components

### `App.jsx` 🎯
- Main routing component
- Routes:
  - `/` – Home page
  - `/login` – User login
  - `/signup` – User signup
  - `/captain-login` – Captain login
  - `/captain-signup` – Captain signup

### `UserHome.jsx` 🏠
- Landing page with:
  - Uber logo
  - Traffic-themed background
  - "Get Started" section
  - Continue button

### `User_Login.jsx` 🔑
- User authentication with:
  - Email/password inputs
  - Form validation
  - Navigation links
  - State management

### `User_signup.jsx` ✍️
- Registration form featuring:
  - Personal details
  - Account creation
  - Form validation
  - State management

### `Captain_Login.jsx` 🚘
- Driver authentication with:
  - Secure login
  - Form validation
  - Navigation options

### `Captain_Signup.jsx` 📝
- Driver registration with:
  - Profile creation
  - Vehicle information
  - Account setup

## 🎨 Styling

- **Tailwind CSS** for responsive design
- Consistent UI components
- Modern color scheme
- Custom branding elements

## 🔄 State Management

- Local state with `useState`
- Global state with Context API
- Efficient data flow

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Azad88101/2-UBER_CLONE.git
   cd uber-clone-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🛠 Tech Stack

- ⚛️ React
- 🛣️ React Router
- 🎨 Tailwind CSS
- 🔄 Context API
- 📱 Responsive Design

## 🔮 Future Improvements

- [ ] Enhanced form validation
- [ ] Loading states
- [ ] Error handling
- [ ] Password strength requirements
- [ ] Authentication flow
- [ ] Vehicle information system
- [ ] Location services
- [ ] Payment integration

---

<div align="center">

Made with ❤️ by Azad

</div>