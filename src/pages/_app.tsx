import { useRouter } from 'next/router'
import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
