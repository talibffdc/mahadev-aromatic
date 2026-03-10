import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Temporarily allowing all admin access for debugging
  // TODO: Re-enable authentication after fixing password verification
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"]
}
