import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // If we had a database, we could check maintenance mode here.
  // But since we use a local JSON file, we rely on the check in page.tsx for the home page.
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login|maintenance|asset).*)',
  ],
};
