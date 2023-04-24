import '@/styles/globals.css'
import Link from 'next/link'


export default function App({ Component, pageProps }) {
  return  (
    <div>
      <header>
        <div className="flex justify-center align-middle h-10">
          This is the header. Here are some links!
          <div className="flex justify-around w-6/12">
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/about">About</Link>
            </div>
          </div>
        </div>
      </header>
      <Component {...pageProps} />
    </div>
  )
}
