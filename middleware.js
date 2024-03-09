import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request){

  const authToken = request.cookies.get("token")?.value;

  const loggedInUserNotAccessPaths = request.nextUrl.pathname === "/";

  if(loggedInUserNotAccessPaths){
    if(authToken){
      return NextResponse.redirect(new URL("/form", request.url), {
        headers: {
          'Cache-Control': 'no-store'
        }
      });
    }
  } else{
    if(!authToken){
      return NextResponse.redirect(new URL("/", request.url), {
        headers: {
          'Cache-Control': 'no-store'
        }
      });
    }
  }

  // console.log("Auth token:", authToken);

  // if (authToken) {
  //   try {
  //     const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET);
  //     const username = decodedToken.username; // Assuming the token contains a 'username' property

  //     const loggedInUserNotAccessPaths = request.nextUrl.pathname === "/" || request.nextUrl.pathname === "/register";

  //     if (loggedInUserNotAccessPaths) {
  //       return NextResponse.redirect(new URL("/form", request.url), {
  //         headers: {
  //           'Cache-Control': 'no-store'
  //         }
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error verifying token:", error);
  //     return NextResponse.redirect(new URL("/", request.url), {
  //       headers: {
  //         'Cache-Control': 'no-store'
  //       }
  //     });
  //   }
  // } else {
  //   return NextResponse.redirect(new URL("/", request.url), {
  //     headers: {
  //       'Cache-Control': 'no-store'
  //     }
  //   });
  // }

  // return NextResponse.next();


}

export const config = {
  matcher : [
    "/",
    "/register",
    "/form",
    "/admin",
    "/coupon",
    "/deleteRecord",
    "/edit/:path*",
    "/delete/:path*",

  ]
}

