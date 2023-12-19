import { addMonths } from 'date-fns'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // const cookie = document.cookie
  const cookie = request.cookies.get('next-auth.session-token')?.value || ''
  // const cookie = document.cookie
  const response = NextResponse.next()
  if (cookie) {
    response.headers.set('Authorization', cookie)
    response.cookies.set({
      name: 'auth_token',
      value: cookie,
      expires: addMonths(new Date(), 1),
    })
    return response
  }

  return NextResponse.redirect(new URL('/login', request.url))
}

const auth = (req: NextRequest) => {
  // let cookie = req.cookies.get('next-auth.session-token')
  const cookie = document.cookie

  // const isAuth = req.
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|login).*)'],
}
