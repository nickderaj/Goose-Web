import { type NextRequest, NextResponse } from 'next/server';

import { createClient } from '@/utils/supabase/middleware';

export async function middleware(request: NextRequest) {
    try {
        const { supabase, response } = createClient(request);
        await supabase.auth.getSession(); // Refresh session if expired - required for Server Components
        return response;
    } catch (e) {
        // If here, environment variables likely missing
        return NextResponse.next({ request: { headers: request.headers } });
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
