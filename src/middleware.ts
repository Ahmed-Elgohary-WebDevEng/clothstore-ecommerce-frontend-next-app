import { NextRequest } from "next/server";
import { isAuthenticatedUser } from "@/lib/auth-session";

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  const isAuthenticated = await isAuthenticatedUser();

  const protectedPages = ["/user-profile", "/reset-password", "/verify-email"];
  const authPages = ["/login", "/register"];

  const isProtectedRoute = protectedPages.some((router) =>
    pathName.startsWith(router),
  );
  const isAuthRoute = authPages.some((router) => pathName.startsWith(router));

  // if the user is authenticated and try to go auth route ==> redirect the user to the home page
  if (isAuthenticated && isAuthRoute) {
    return Response.redirect(new URL("/", request.url));
  }

  if (!isAuthenticated && isProtectedRoute) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
    "/reset-password",
    "/verify-email",
    "/user-profile",
  ],
};
