# NextShop - A Next.js 15 Product App

NextShop is a full-stack web application built with Next.js 15 (App Router), Tailwind CSS, and NextAuth.js. It features a complete authentication system with both credentials and Google login, public pages for browsing products, and a protected dashboard for adding new items. The application is enhanced with modern UX features like toast notifications and a light/dark theme toggle.

**Live Site:** `[Your Vercel Link Here]`

---

## Core Features

* **Full Authentication**: Secure login with email/password or Google accounts using NextAuth.js.
* **Protected Routes**: Middleware protects the admin dashboard from unauthenticated users.
* **Dynamic Pages**: Server-side rendering for product lists and individual product detail pages.
* **API Routes**: Backend logic handled by Next.js Route Handlers.
* **Modern UI/UX**:
    * Responsive design with Tailwind CSS.
    * Toast notifications for user actions.
    * Light and dark mode theme support.

---

## Setup & Installation

Follow these steps to run the project locally.

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**
    Create a file named `.env.local` in the root of the project. Generate a `NEXTAUTH_SECRET` with the command `openssl rand -base64 32`.

    ```env
    # Google OAuth Credentials
    GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
    GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET

    # NextAuth Configuration
    # Generate a secret with: openssl rand -base64 32
    NEXTAUTH_SECRET=YOUR_GENERATED_SECRET
    NEXTAUTH_URL=http://localhost:3000
    ```

4.  **Run the Development Server**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Route Summary

* `/` - **Landing Page**: Publicly accessible page with a hero section and featured products.
* `/login` - **Login Page**: Allows users to sign in with Google or mock credentials (`test@example.com` / `password`).
* `/products` - **Product List Page**: A public page displaying all available products with images and details.
* `/products/[id]` - **Product Details Page**: A dynamic page showing full details and an image for a single product.
* `/dashboard/add-product` - **Add Product Page**: **Protected route**. A form for authenticated users to add new products, including an image URL.

---

## API Routes

* `GET /api/products` - Fetches all products.
* `GET /api/products/[id]` - Fetches a single product by its ID.
* `POST /api/products` - **Protected endpoint**. Adds a new product to the database.
* `GET /api/auth/[...nextauth]` - Handles all NextAuth.js authentication logic (sign-in, sign-out, session management).
* `POST /api/auth/[...nextauth]` - Handles all NextAuth.js authentication logic.