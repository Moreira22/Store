import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

const hamdler = NextAuth(authOptions);
export { hamdler as GET, hamdler as POST};
