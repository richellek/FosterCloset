import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import '../styles.css';

function RenderCard({ shopcard }) {
    return (
        <Card className='text-card'>
            <CardImg className='card-img' width='100%' src={shopcard.image} alt={shopcard.name} />
            <CardTitle className='card-title'> {shopcard.name}</CardTitle>
            <CardBody className='card-text'> {shopcard.description}</CardBody>
        </Card>
    );
}

const Shop = props => {
    const shopcards = props.shopcards.map(card => {
        return (
            <div className='col-12 col-md-6'>
                <RenderCard shopcard={card} />
            </div>
        );
    });

    return (
        <div className=' container'>
            <div className='row'>{shopcards}</div>
        </div>
    );
};

export default Shop;
