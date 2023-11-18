import { Box } from '@radix-ui/themes'

export function Container({ children }: { children: React.ReactNode }) {
  return <Box className="mx-auto w-full h-screen px-4">{children}</Box>
}
