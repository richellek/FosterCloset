import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import '../styles.css';

function RenderCard({ homecard }) {
    return (
        <Card className='card'>
            <Link to={homecard.link}>
                <CardImg className='card-img' width='100%' src={homecard.image} alt={homecard.name} />
                <CardTitle className='card-title'> {homecard.name}</CardTitle>
                <CardBody className='card-text'> {homecard.description}</CardBody>
            </Link>
        </Card>
    );
}

const Home = props => {
    const homecards = props.homecards.map(card => {
        return (
            <div className='col-12 col-md-6'>
                <RenderCard homecard={card} />
            </div>
        );
    });
    return (
        <div className=' container'>
            <div className='row'>{homecards}</div>
        </div>
    );
};

export default Home;
