import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import '../styles.css';

function RenderCard({ aboutcard }) {
    return (
        <Card className='text-card'>
            <CardImg className='card-img' width='100%' src={aboutcard.image} alt={aboutcard.name} />
            <CardTitle className='card-title'> {aboutcard.name}</CardTitle>
            <CardBody className='card-text'> {aboutcard.description}</CardBody>
        </Card>
    );
}

function RenderBoardCard({ boardcard }) {
    return (
        <Card className='text-card'>
            <CardImg className='card-img' width='100%' src={boardcard.image} alt={boardcard.name} />
            <CardBody className='card-text'> {boardcard.name}</CardBody>
            <CardBody className='card-text'> {boardcard.description}</CardBody>
        </Card>
    );
}

const About = props => {
    const aboutcards = props.aboutcards.map(card => {
        return (
            <div className='col-12 col-md-6'>
                <RenderCard aboutcard={card} />
            </div>
        );
    });
    const boardcards = props.boardcards.map(card => {
        return (
            <div className='col-6 col-md-3'>
                <RenderBoardCard boardcard={card} />
            </div>
        );
    });
    return (
        <div className=' container'>
            <div className='row'>{aboutcards}</div>

            <CardTitle>Board Members</CardTitle>
            <div className='row'>{boardcards}</div>
        </div>
    );
};

export default About;
