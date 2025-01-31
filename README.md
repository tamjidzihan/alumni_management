# School Alumni Management System

## Overview

This project is a **School Alumni Management System** built using **React, Vite, TypeScript, Tailwind CSS**, and **Firebase**. It features a public website with sections like Home, About, Events, Services, Photo Gallery, and Contact. It also includes an **Admin Panel** for managing school-related data.

## Features

### Public Website

- **Home Page** with dynamic content sections
- **Event Management** with upcoming school events
- **Photo Gallery** for school events and activities
- **Services Section** displaying school facilities and offerings
- **Contact Page** with an inquiry form
- **About Page** with school details

### Authentication

- **User Authentication** using Firebase
- **Sign In & Sign Up** with email/password
- **Private Routes** for secure admin access

### Admin Panel

- **Dashboard** to manage school operations
- **Event Management** (Add/Edit/Delete events)
- **Alumni List** management
- **Photo Gallery** management
- **Site Settings** to update About and Contact information
- **Admin Authentication** with Firebase

## Tech Stack

- **Frontend**: React, Vite, TypeScript, Tailwind CSS
- **State Management**: React Hooks
- **Routing**: React Router
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **UI Components**: Tailwind CSS, Material UI

## Installation

### Prerequisites

Ensure you have **Node.js** and **npm** or **yarn** installed.

### Clone the Repository

```sh
git clone https://github.com/tamjidzihan/school-management-system.git
cd school-management-system
```

### Install Dependencies

```sh
npm install
# or
yarn install
```

### Set Up Firebase

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/)
2. Add Firebase credentials in a `.env` file:

```sh
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
```


### Set Up Cloudinary

1. Create a cloudinary project in the [Cloudinary Console](https://cloudinary.com/users/login)
2. Add cloudinary credentials in a `.env` file:

```sh
VITE_PRESET=your_cloudinary_preset
VITE_CLOUDINARYURL=your_cloudinary_url
```


### Run the Development Server

```sh
npm run dev
# or
yarn dev
```

### Build for Production

```sh
npm run build
# or
yarn build
```

## Project Structure

```
📂 school-management-system
├── 📂 public
├── 📂 src
│   ├── 📂 admin
│   │   ├── 📂 components
│   ├── 📂 pages
│   │   ├── 📂 AlumniList
│   │   ├── 📂 Authentication
│   │   ├── 📂 Dashboard
│   │   ├── 📂 Events
│   │   ├── 📂 Gallery
│   │   ├── 📂 SiteSettings
│   ├── 📂 hooks
│   ├── 📂 components
│   ├── 📂 context
│   ├── 📂 firebase
│   ├── 📂 css
│   ├── 📂 pages
```

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the **MIT License**.

## Author

Developed by **Tamjid Zihan**.

## Contact

- **GitHub**: [tamjidzihan](https://github.com/tamjidzihan)
- **Email**: [tamjidzihan@gmail.com]
- **Website**: [https://cmhsaa.com/]

