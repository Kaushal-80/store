import { NextResponse } from "next/server"

export function middleware(req){
    const path = req.nextUrl.pathname

    const isPublicPath = path === '/' || path ==='/register'

    const token = req.cookies.get('token')?.value || ''

    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/form', req.nextUrl))
    }

    if(!isPublicPath && !token) { 
        return NextResponse.redirect(new URL('/', req.nextUrl))
    
    }
}

export const config = {
    matcher: [
        '/',
        '/register',
        '/form',
        '/admin',
    ]
}