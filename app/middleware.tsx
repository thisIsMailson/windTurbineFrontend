import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
    return NextResponse.redirect(new URL('/', req.url))
}

export const config = {
    matcher: '/blog/:path*'
}