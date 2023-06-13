import { Container } from 'react-bootstrap';
import Link from 'next/link';
import {Button} from 'react-bootstrap';



const NotFound = () => {
    return (
      <div className="notFoundWrapper">
        <Container>     
   
          <h2>Error 404</h2>
          <p>It seems there is nothing here</p>
          <div className="notFoundCover">

          </div>
          <div className="homeBtn">
            <Button href='/'>Back Home</Button>

          </div>
        </Container>
      </div>
    )
  }
  
  export default NotFound