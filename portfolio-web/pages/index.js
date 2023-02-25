import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>Portfolio website</Head>
      <div>Start</div>
      <h1 className="title">
        Read <Link href="/about">this page!</Link>
      </h1>
      <div>
        <Link href="/contact">Contacts page</Link>
      </div>
      <Image 
        src="/images/profile_image.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      ></Image>
    </>
  )
}
