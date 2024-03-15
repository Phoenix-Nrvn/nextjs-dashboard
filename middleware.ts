import NextAuth from "next-auth";
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher，其实是匹配非静态资源的路径
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}