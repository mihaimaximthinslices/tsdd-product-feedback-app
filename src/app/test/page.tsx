import Image from 'next/image'
import { Hello } from '../../components/Hello'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { getData } from '@/server/actions'

export default async function Home() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['stuff'],
    queryFn: getData,
    staleTime: 1,
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Hello />
      </HydrationBoundary>
    </main>
  )
}
