import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  secret:
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'your-username',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'your-password',
        },
      },
      authorize(credentials) {
        const user = { id: '42', name: 'mihai', password: 'hell' }
        if (credentials?.username === user.name) {
          return user
        }
        return null
      },
    }),
  ],
}
