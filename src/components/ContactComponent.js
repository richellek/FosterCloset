import React, { Component } from 'react';
import { Card, CardTitle, Row, Col, CardImg, Button } from 'reactstrap';
import '../styles.css';

class Contact extends Component {
    render() {
        return (
            <div className=' container'>
                <Card>
                    <CardImg src='/images/Contact.jpg' />
                    <CardTitle>Contact Us</CardTitle>
                    <Row>
                        <Col sm='6'>
                            <Card>
                                <Button className='col-12' color='danger' tag='a' href='mailto:whatcomfostercloset@gmail.com' target='_blank'>
                                    Email whatcomfostercloset@gmail.com
                                </Button>
                            </Card>
                        </Col>
                        <Col sm='6'>
                            <Card>
                                <Button className='col-12' color='secondary' tag='a' href='https://www.facebook.com/whatcomfostercloset/' target='_blank'>
                                    Find us on Facebook
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default Contact;
