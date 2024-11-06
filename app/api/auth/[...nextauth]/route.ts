import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { scryptSync } from "crypto";

// Define the type for credentials
interface Credentials {
  email: string;
  password: string;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: Credentials | undefined) {
        if (!credentials) {
          return null; // If credentials are undefined, return null
        }

        const { email, password } = credentials;

        try {
          // Connect to MongoDB
          await connectMongoDB();

          // Find the user by email
          const user = await User.findOne({ email });

          // If the user doesn't exist, return null
          if (!user) {
            return null;
          }

          // Retrieve the stored password hash and salt from the user document
          const { passwordHash, salt } = user;

          // Hash the entered password using the salt from the database
          const hashedPassword = scryptSync(password, salt, 64).toString('hex');

          // Compare the hashed password with the stored password hash
          if (hashedPassword !== passwordHash) {
            return null; // If passwords don't match, return null
          }

          // If authentication is successful, return the user object
          return user;
        } catch (error) {
          console.log("Error: ", error);
          return null; // Return null if an error occurs
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as const, // Use the correct 'jwt' literal type
  },
  secret: process.env.NEXTAUTH_SECRET, // Secret for encrypting JWT tokens
  pages: {
    signIn: "/", // Custom sign-in page URL
  },
};

// Handler for GET and POST requests
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
