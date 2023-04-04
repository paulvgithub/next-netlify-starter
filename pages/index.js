import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from "@styles/popup.css"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />   
      </Head>

      <main>
        <Header title="Welcome To Site!" />
     
        <h1><a href="pvpython.pythonanywhere.com">Python/MySQL</a></h1>
    
      </main>

      <Footer />
    </div>
  )
}
