import '../styles/globals.css';
import type {AppProp} from 'next/app';
import Head from 'next/head';

const MyApp = ({Component, pageProps}: AppProps) => (
  <>
    <Head>
      <meta name="viewport"/>
    </Head>
    <Component {...pageProps}/>
  </>
);

export default MyApp;
