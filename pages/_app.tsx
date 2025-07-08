import '../styles/tailwind.css'; // Import Tailwind CSS file
import type { AppProps } from 'next/app';
import Head from 'next/head'; // For managing page metadata

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Global metadata */}
      <Head>
        <title>Qraft Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Learn and grow with Qraft Academy." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Render the current page */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;