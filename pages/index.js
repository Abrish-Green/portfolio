import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import Warning from '../Components/Warning/Index'
export default function Home() {
  const router = useRouter()

  setTimeout(() => {
      router.push('/entrance')
  },3000)
  return (
    <div>
      <Head>
        <title>Abrham Muche</title>
        <meta name="description" content="Abrham Muche Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
          </Head>
      <Script src="https://cdn.tailwindcss.com"></Script>
      <Warning />
      
    </div>
  )
}
