'use client'
import { getData } from '@/actions/actions'
import { useQueries, useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { Button } from '@radix-ui/themes'

export function Hello() {
  const { data, refetch, isLoading, isRefetching } = useQuery({
    queryKey: ['stuff'],
    queryFn: () => getData(),
    staleTime: 0,
  })

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <>
      <div>
        Message from BE {JSON.stringify(data)} {JSON.stringify(isRefetching)}{' '}
        {JSON.stringify(isLoading)}
      </div>
      <Button
        onClick={() => {
          console.log('wadap')
        }}
      >
        Click me
      </Button>
      <button
        onClick={() => {
          refetch()
        }}
      >
        {' '}
        click
      </button>
    </>
  )
}
