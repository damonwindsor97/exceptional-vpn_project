import { Fragment } from 'react'
import ArticleList from '@/components/features/articles/ArticleList/ArticleList';
import { Button } from 'react-bootstrap';
import Head from 'next/head';

const newsPage = (props) => {
    const { vpnArticles } = props;

    if (vpnArticles === null) {
      return (
        <div>
          <h1>VPN News</h1>
          <h4>The Latest in VPN News</h4>
          <p>Failed to fetch VPN Articles.</p>
          <p>Please try again later.</p>
          <Button href='/technews'>
          TechRadar News
        </Button>
        </div>
      );
    }
  
    return (
      <Fragment>
          <Head>
            <title>Exceptional | VPN News</title>
            <meta 
              name='Exceptional VPN'
              description='Exceptional VPN Brings you the latest news'
              />
          </Head>
        <h1>News</h1>
        <h4>The Latest in VPN News</h4>
        <Button href='/technews'>
          TechRadar News
        </Button>
        {vpnArticles && vpnArticles.length > 0 ? (
          <ArticleList articles={vpnArticles} />
        ) : (
          <p>No VPN articles available at this time, please come back later</p>
        )}
      </Fragment>
    );
}

export const getStaticProps = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=vpn&pageSize=6&apiKey=${process.env.NEWS_API_KEY}`);
      const data = await response.json();
      const articles = data.articles || null;
  
      return {
        props: {
          vpnArticles: articles,
        },
        revalidate: 60
      };
    } catch (error) {
      console.log(error);
      return {
        props: {
          vpnArticles: null,
        },
        revalidate: 60
      };
    }
  };

export default newsPage;