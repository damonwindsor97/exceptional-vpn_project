
import { Fragment } from "react"
import { Container } from "react-bootstrap"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const contact = () => {
  return (
    <Fragment>
        <Container>
            <h1 className="main-heading">Get in Contact</h1>
            <h3 className="sub-heading">For questions, inquiries, or issues</h3>
            <h5></h5>

            <div className='main-form'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We will never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSubhect">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSubhect">
                        <Form.Label>Details & Information</Form.Label>
                        <span class="input-group-text">Please be as descriptive as possible</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Are you a current Customer?" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

        </Container>
    </Fragment>
  )
}

export default contact