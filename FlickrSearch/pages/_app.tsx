import { AppProps } from 'next/app'
import '../styles/globals.scss'

export default function flickrApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
