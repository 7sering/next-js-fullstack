import User from "@/models/User";
import dbConnection from "@/utils/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await dbConnection();

        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            //check password
            const isPsswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPsswordCorrect) {
              return user;
            } else {
              throw new Error("Password is incorrect");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  }
});

export { handler as GET, handler as POST };
