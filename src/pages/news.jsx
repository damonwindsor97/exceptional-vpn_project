import { Fragment } from 'react'
import ArticleList from '@/components/features/articles/ArticleList/ArticleList';

const newsPage = (props) => {
    const { vpnArticles } = props;

  return (
    <Fragment>
        <h1>News</h1>
        <h4>The Latest in VPN News</h4>
        {/* Step 3 is here, simple condition to render component */}
        {/* Step 4 in ArticleItem */}
        {vpnArticles.length > 0 && <ArticleList articles={vpnArticles}/>}
    </Fragment>

  )
}

// Step 1 for calling to API, Step 2 in ArticleList
export const getStaticProps = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?sources=abc-news-au&pageSize=4&apiKey=${process.env.NEWS_API_KEY}`);

    const data = await response.json();
    // const data = await JSON.parse(JSON.stringify(response));

    const articles = data.articles;

    // Return our Data as Props, Access to everything is within Articles - check postman with endpoint
    return {
        props: {
            vpnArticles: articles
        },
        revalidate: 60
    };
};

export default newsPage