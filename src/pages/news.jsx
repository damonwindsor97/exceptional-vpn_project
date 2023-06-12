import { Fragment } from 'react'
import ArticleList from '@/components/features/articles/ArticleList/ArticleList';

const newsPage = (props) => {
    const { vpnArticles } = props;

    if (vpnArticles === null) {
      return (
        <div>
          <p>Failed to fetch VPN articles.</p>
          <p>Please try again later.</p>
        </div>
      );
    }
  
    return (
      <Fragment>
        <h1>News</h1>
        <h4>The Latest in VPN News</h4>
        {vpnArticles && vpnArticles.length > 0 ? (
          <ArticleList articles={vpnArticles} />
        ) : (
          <p>No articles available</p>
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