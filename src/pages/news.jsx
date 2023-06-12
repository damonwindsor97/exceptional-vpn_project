import { Fragment } from 'react'
import ArticleList from '@/components/features/articles/ArticleList/ArticleList';

const newsPage = (props) => {
  const { vpnArticles } = props;

  return (
    <Fragment>
      <h1>News</h1>
      <h4>The Latest in VPN News</h4>
      {/* Check if vpnArticles is undefined */}
      {vpnArticles ? (
        vpnArticles.length > 0 ? (
          <ArticleList articles={vpnArticles} />
        ) : (
          <p>No articles available</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  )
}

export const getStaticProps = async () => {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?sources=abc-news-au&pageSize=4&apiKey=${process.env.NEWS_API_KEY}`);
    const data = await response.json();
    const articles = data.articles;

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