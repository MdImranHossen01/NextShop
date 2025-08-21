# Productify - A Next.js 15 Product Management App

A simple application built with Next.js 15 (App Router), Tailwind CSS, and NextAuth.js. This project features public pages for viewing products and protected pages for managing them.

**Live Site:** [Your Vercel Link Here]

---

## Setup & Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Create a `.env.local` file in the root of the project and add your environment variables. You can generate a `NEXTAUTH_SECRET` with `openssl rand -base64 32`.
    ```
    NEXTAUTH_SECRET=your_secret_key
    NEXTAUTH_URL=http://localhost:3000
    ```
5.  Run the development server:
    ```bash
    npm run dev
    ```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Route Summary

-   `/` - **Landing Page**: Publicly accessible page with a hero section and featured products.
-   `/login` - **Login Page**: Page for users to log in. Uses mock credentials (`test@example.com` / `password`).
-   `/products` - **Product List Page**: Publicly accessible page displaying all available products.
-   `/products/[id]` - **Product Details Page**: Publicly accessible dynamic page showing details for a single product.
-   `/dashboard/add-product` - **Add Product Page**: **Protected route**. Only accessible to authenticated users. Contains a form to add new products to the list.

## API Routes

-   `GET /api/products` - Fetches all products.
-   `GET /api/products/[id]` - Fetches a single product by ID.
-   `POST /api/products` - **Protected endpoint**. Adds a new product to the database.