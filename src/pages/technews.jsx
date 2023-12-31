
import ArticleList from '@/components/features/articles/ArticleList/ArticleList';
import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Head from 'next/head';

const technews = (props) => {
  const { techArticles } = props;
  
  return (
    <Fragment>
          <Head>
            <title>Exceptional | Tech News</title>
            <meta 
              name='Exceptional VPN'
              description='Exceptional VPN Brings you the latest news'
              />
          </Head>
      <Container>
          <h1 className='main-heading'>Tech News</h1>
          <h5 className=''></h5>
          <h3 className=''>The latest articles from Tech Radar</h3>
          <Link href='/news'>
            <Button>
            VPN News
            </Button>
          </Link>
        {techArticles && techArticles.length > 0 ? (
          <ArticleList articles={techArticles}/>
        ) : (
          <p>There are no Tech Radar Articles available, please come back later</p>
        )}

      </Container>
    </Fragment>
  )
}


export const getStaticProps = async () => {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?sources=techradar&pageSize=4&apiKey=${process.env.NEWS_API_KEY}`);
    const data = await response.json();
    const articles = data.articles || null;

    return {
      props: {
        techArticles: articles,
      },
      revalidate: 60
    };
  }catch (error) {
    console.log(error);
    return {
      props: {
        techArticles: null,
      },
      revalidate: 60
    };
  }
};

export default technews