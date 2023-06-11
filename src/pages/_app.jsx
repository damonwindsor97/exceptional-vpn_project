import Layout from '@/components/layout';
import '@/styles/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>


  )
};

export default App;

