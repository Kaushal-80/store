import { Jwt } from "jsonwebtoken";

export function middleware(req, res, next){
    
    const token =  req.header('auth-token');


    next()
}

// export const config = {
//     matcher: ["/form", "/admin"]
// }