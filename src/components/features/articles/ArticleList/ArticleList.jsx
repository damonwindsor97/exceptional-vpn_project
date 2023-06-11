// import { Container } from "react-bootstrap";
import Container from "@/components/common/Container/Container";
import ArticleItem from "../ArticleItem/ArticleItem";


// This is step 2
const ArticleList = (props) => {
    const { articles } = props;
  return (
    <Container>
        {/* Add index if API does not give data an id */}
        {articles.map((article, index) => (
            <ArticleItem
            key={index}
            id={index}
            urlToImage={article.urlToImage}
            url={article.url}
            title={article.title}
            description={article.description}
            />
        ))}
    </Container>
  )
}

export default ArticleList