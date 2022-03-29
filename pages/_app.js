import { Footer } from '../comps/Footer'
import Layout from '../comps/Layout'
import Provider from '../context/UC'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
