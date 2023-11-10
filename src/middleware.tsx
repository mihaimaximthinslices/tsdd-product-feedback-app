export { default } from 'next-auth/middleware'

export const config = {
  // matcher: ['/((?!/|static|favicon.ico).*)'],
  matcher: ['/test', '/api/example'],
}
