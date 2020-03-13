import '../base.css'

export default function MyApp ({ Component, pageProps }) {
  return (
    <div className='main'>
      <section className='content'>
        <Component {...pageProps} />
      </section>
      <footer>
        <span>Efosa Oyegun</span>
      </footer>
    </div>
  )
}
