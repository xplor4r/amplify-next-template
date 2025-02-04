import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { updateSession } from './utils/supabase/middleware';

// import { createMiddlewareClient} from '@supabase/auth-helpers-nextjs'

// const isProduction = process.env.NODE_ENV === 'production';


export async function middleware(req: NextRequest) {
    return await updateSession(req);
}

export const config = {
    matcher: [
        // `/((?!api/|_next|_proxy|_static|_vercel|favicon.ico|sitemap.xml).*)`,
        '/((?!api/!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
    ]
}