import Layout from '@/components/layout';
import '@/styles/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Script from 'next/script'

function App({ Component, pageProps }) {
  return (
    
    
    <Fragment>

        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-KJE0Z2H4NC"/>
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-KJE0Z2H4NC'), {
                page_path: window.location.pathname,
              };
            `,
            }}
        />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>


  )
};

export default App;

