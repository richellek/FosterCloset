import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles.css';

function RenderCard({ supportcard }) {
    return (
        <Card className='text-card'>
            <Link to={supportcard.link} />
            <CardImg className='card-img' width='100%' src={supportcard.image} alt={supportcard.name} />
            <CardTitle className='card-title'> {supportcard.name}</CardTitle>
            <CardBody className='card-text'> {supportcard.description}</CardBody>
        </Card>
    );
}

const Support = props => {
    const supportcards = props.supportcards.map(card => {
        if (card.link) {
            return (
                <div className='col-12 col-md-6'>
                    <a href={card.link}>
                        <RenderCard supportcard={card} />
                    </a>
                </div>
            );
        }
        return (
            <div className='col-12 col-md-6'>
                <RenderCard supportcard={card} />
            </div>
        );
    });

    return (
        <div className=' container'>
            <div className='row'>{supportcards}</div>
        </div>
    );
};

export default Support;
