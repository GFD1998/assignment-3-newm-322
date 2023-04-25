import '@/styles/globals.css'


/* Nav Imports */
import '/src/styles/nav.css';


/* Page Specific Imports */
import '/src/styles/pageStyles/home.css';
import '/src/styles/pageStyles/about.css';
import '/src/styles/pageStyles/products.css';

/* Footer Imports */
import '/src/styles/footer.css';



import type { AppProps } from 'next/app'
import Link from 'next/link';
import Modal from '../components/Modal';

console.log('Generating nav bar here.');
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/products'>Products</Link>
          </li>
        </ul>
        <span>The Soap Factory</span>
      </nav>
      <header>
          <img src='/images/hero.jpg' />
      </header> */}
      
      <Component {...pageProps} />
      {/* <footer>
        <Modal trigger='&copy; The Soap Factory'>
          Copyright of The Soap Factory<br />
          Trademark of The Soap Factory

        </Modal>
        <Modal trigger='Terms and Conditions'>
          List of terms and conditions.
        </Modal>
      </footer> */}
    </>
  )
  return <Component {...pageProps} />
}
