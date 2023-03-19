import Head from 'next/head'
import { Inter } from 'next/font/google'
import About from 'components/about'
import Start from '@/components/start'
import Education from '@/components/education'
import Jobs from '@/components/jobs'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>Portfolio website</Head>
      <Layout></Layout>
      <Start></Start>
      <About></About>
      <Education></Education>
      <Jobs></Jobs>
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
}
