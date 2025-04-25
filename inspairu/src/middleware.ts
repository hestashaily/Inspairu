import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;
  const protectedPaths = ["/home", "/upload-post"];
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  const allowedPaths = ["/", "/auth", "/api", "/_next", "/favicon.ico"];
  const isAllowed = allowedPaths.some((path) => pathname.startsWith(path));
  if (!isProtected && !isAllowed) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/:path*"],
};
