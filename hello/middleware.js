
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log("middleware executed");
    
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/form',
}