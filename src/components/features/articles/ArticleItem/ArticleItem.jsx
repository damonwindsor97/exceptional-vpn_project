import styles from './ArticleItem.module.scss';
import Image from 'next/image';
// import Card from '@/components/common/Card/Card';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap';
import ButtonLink from '@/components/common/ButtonLink'; 
import { useRouter } from 'next/router';

// Step 4
const ArticleItem = (props) => {

    const router = useRouter();
    function handleNavigate() {
      router.push('/' + props.id);
    }

  return (
    <Card size="grid" border="info">
      {/* CARD MAIN */}
      <div className={styles.articleMain}>
        <div className={styles.imageBox}>

            { props.urlToImage && <Image 
              className={styles.nextImage}
              src={props.urlToImage} 
              alt={props.title} 
              fill={true}
              sizes="(max-width: 768px) 100vw, 50vw"
            /> }
            { props.urlToImage && <Image 
              className={styles.nextImage}
              src={props.urlToImage} 
              alt={props.title} 
              fill={true}
              sizes="(max-width: 768px) 100vw, 50vw"
            /> } 
          
        </div>
        <div className={styles.articleContent}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
      {/* CARD FOOTER */}
      <div className={styles.articleFooter}>
        { props.image ? 
          <Button onClick={handleNavigate}>
            Show Details
          </Button>
        : 
          <ButtonLink path={props.url} target="_blank">
            Link to Article
          </ButtonLink>
        }
      </div>
    </Card>
  )
}

export default ArticleItem