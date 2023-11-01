import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware"; // shortcut

// export default middleware;

// CUSTOM
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/next-page', request.url))
// };

export const config = {
    // *: zero or more
    // +: one or more
    // ?: zero or one
    matcher: ['/users/:path*']
}