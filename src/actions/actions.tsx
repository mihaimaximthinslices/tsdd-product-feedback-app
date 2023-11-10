'use server'
import { authOptions } from '@/auth'
import { getServerSession } from 'next-auth'
export async function getData() {
  const session = await getServerSession(authOptions)
  if (!session) {
    throw new Error('wtf')
  }

  const resp = await fetch(
    'http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5',
    {
      cache: 'no-cache',
    },
  )

  const json = await resp.json()

  return json
}
