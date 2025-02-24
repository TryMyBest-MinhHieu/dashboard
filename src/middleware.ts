import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 🔹 Định nghĩa các đường dẫn cần bảo vệ & trang xác thực
const privatePaths = ["/admin/dashboard"];
const authPaths = ["/admin/login"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  const isPrivateRoute = privatePaths.some((path) => pathname.startsWith(path));
  const isAuthRoute = authPaths.some((path) => pathname.startsWith(path));

  // Nếu truy cập privatePaths mà chưa có token → Chuyển đến /admin/login
  if (isPrivateRoute && !token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // Nếu truy cập authPaths mà đã có token → Chuyển đến /admin/dashboard
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  return NextResponse.next();
}

// 🔹 Middleware sẽ áp dụng cho tất cả các route trong /admin
export const config = {
  matcher: "/admin/:path*",
};
