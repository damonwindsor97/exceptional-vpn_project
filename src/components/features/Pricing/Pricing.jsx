import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './Pricing.module.scss'
import { Container } from 'react-bootstrap';


const Pricing = () => {
  return (
    <div className={styles.pricingSegment}>
            <h1 className={styles.mainHeading}>Plans & Pricing</h1>
            <p>Checkout our competitive prices</p>
        <Container>

        <CardGroup>
        <Card className='priceCard'>

            <Card.Body>
            <Card.Title class=" fw-bold text-decoration-underline">Bronze Plan</Card.Title>
            </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            <Card.Body>
                <h4>$9.95aud</h4><p> Per Month</p>
            </Card.Body>
            <Button>Purchase</Button>

        </Card>

        <Card className='priceCard'>

            <Card.Body>
            <Card.Title class=" fw-bold text-decoration-underline">Silver Plan</Card.Title>
            </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            <Card.Body>
                <h4>$14.95aud</h4><p> Per Month</p>
            </Card.Body>

            <Button>Purchase</Button>

        </Card>
        
        <Card className='priceCard'>
            <Card.Body>
            <Card.Title class=" fw-bold text-decoration-underline">Exceptional Plan</Card.Title>
            </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            <Card.Body>
                <h4>$24.95aud</h4><p> Per Month</p>
            </Card.Body>


            <Button>Purchase</Button>

        </Card>
        </CardGroup>
        </Container>




    </div>
  )
}

export default Pricing