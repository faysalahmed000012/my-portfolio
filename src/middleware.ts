import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken")?.value;

  // Check if the request is for a protected route
  if (request.nextUrl.pathname.startsWith("/management")) {
    if (!authToken) {
      // If there's no auth token, redirect to the login page
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // For all other routes, allow the request to proceed
  return NextResponse.next();
}

// Specify which routes this middleware should run on
export const config = {
  matcher: ["/management", "/management/:path*"],
};
