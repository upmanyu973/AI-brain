'use client'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navabar'
import './globals.css'
import { Literata } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'

const inter = Literata({ subsets: ['latin'] })

export const metadata = {
  title: 'Ai-brain',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      {/* <Head>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </Head> */}
      <body>
        <Navbar />
        <main class="mb-5">
          {children}
        </main>
        <Footer />
      </body>
      {/* <Footer/> */}
    </html>
  )
}
