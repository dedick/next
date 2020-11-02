import '../styles/globals.css'

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }) {
  console.log('myApp')
  return <Component {...pageProps} />
}

export default MyApp
