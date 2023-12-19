import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // const cookie = document.cookie
  const cookie = request.cookies.get('next-auth.session-token')?.value || ''
  // const cookie = document.cookie
  // console.log('cookie', cookie)
  const response = NextResponse.next()
  response.headers.set('Authorization', cookie)
  response.cookies.set('auth_token', cookie)
  // console.log('cookie', cookie)
  return response
}

const auth = (req: NextRequest) => {
  // let cookie = req.cookies.get('next-auth.session-token')
  const cookie = document.cookie
  console.log('cookie', cookie)
  // const isAuth = req.
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}
