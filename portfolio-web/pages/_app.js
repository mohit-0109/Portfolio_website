import Layout from '@/components/layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <div className="p-6" >
    <Layout >
      <Component {...pageProps} />
    </Layout>
    </div>
    
  ) 
}
