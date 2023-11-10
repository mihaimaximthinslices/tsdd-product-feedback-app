import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const resp = await fetch(
    'http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5',
    {
      cache: 'no-cache',
    },
  )
  const json = await resp.json()

  return NextResponse.json({
    data: json,
  })
}
