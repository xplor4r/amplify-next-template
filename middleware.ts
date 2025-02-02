import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { createMiddlewareClient} from '@supabase/auth-helpers-nextjs'

const isProduction = process.env.NODE_ENV === 'production';

const prodUrl = 'ddg8iicsr72an.amplifyapp.com';
const local = 'localhost:3000';
const domainUrl = isProduction ?  prodUrl : local;

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();

    const hostName = req.headers.get('host');

    const url = req.nextUrl;

    const currentHost = hostName?.replace(`.${domainUrl}`, '');
    console.log('currentHost', currentHost);

    // const supabase = createMiddlewareClient({ req, res});
    
    // const { data } = await supabase.auth.getSession();
    // const { session } = data;  

    // if (currentHost === 'main')  {
    //     console.log('main');
    //     if (url.pathname === '/sign-in' || url.pathname === '/sign-up' || url.pathname === '/') {
    //         if (session) {
    //             url.pathname = '/';
    //             return NextResponse.redirect(url);
    //         }
    //         return res;
    //     }
    //     url.pathname = `/dashboard${url.pathname}`;
    //     return NextResponse.rewrite(url);
    // } 

  
    return res;
}

export const config = {
    matcher: [
        `/((?!api/|_next|_proxy|_static|_vercel|favicon.ico|sitemap.xml).*)`,
    ]
}