// middleware.ts

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Determine the protocol and host
  const protocol = req.headers.get("x-forwarded-proto") || "http";
  const host = req.headers.get("host");
  const path = req.nextUrl.pathname;

  // Construct the full URL
  const fullUrl = `${protocol}://${host}${path}`;

  // Set the current URL in a custom header
  req.headers.set("x-current-url", fullUrl);

  return NextResponse.next();
}

// Define middleware config if needed
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], // Exclude certain paths
};
