import '../styles/globals.css'
import {MoralisProvider} from 'react-moralis'
import {MarketProvider} from '../context/MarketContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
    appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    x>
      <MarketProvider>
        <Component {...pageProps} />
      </MarketProvider>
    </MoralisProvider>
  )
}

export default MyApp
