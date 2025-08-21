// middleware.js
import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/login",
  },
})

// Apply middleware only to the routes you want to protect
export const config = {
  matcher: ["/dashboard/:path*"], // Protects only /dashboard and its sub-routes
}