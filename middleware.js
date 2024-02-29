import next from "next"
import { NextResponse } from "next/server"

export function middleware(req){
    const path = req.nextUrl.pathname

    const isPublicPath = path === '/' || path ==='/register'

    const token = req.cookies.get('token')?.value || ''

    if(isPublicPath && token) {
        return NextResponse.redirect('/form')
    }

    if(!isPublicPath && !token) { 
        return NextResponse.redirect('/')
    
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