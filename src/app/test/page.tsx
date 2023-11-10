import Image from 'next/image'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { getData } from '@/actions/actions'
import { Hello } from '../../../components/Hello'
const queryClient = new QueryClient()

export default async function Test() {
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
