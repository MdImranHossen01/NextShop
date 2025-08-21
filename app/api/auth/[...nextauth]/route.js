import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    // Google OAuth Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    
    // Email/Password Credentials Provider
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is a mock user check. In a real app, you would validate against a database.
        if (credentials.email === "test@example.com" && credentials.password === "password") {
          // On success, return a user object
          return { id: "1", name: "Test User", email: "test@example.com" };
        }
        // Return null if user data could not be retrieved
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login', // Directs users to your custom login page
  },
  session: {
    strategy: 'jwt', // Use JSON Web Tokens for session management
  },
  secret: process.env.NEXTAUTH_SECRET, // Your secret key for signing tokens
};

// Initialize NextAuth with the options
const handler = NextAuth(authOptions);

// Export the handler for GET and POST requests
export { handler as GET, handler as POST };