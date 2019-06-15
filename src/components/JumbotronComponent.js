import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import '../styles.css';    

class Jumbo extends Component {

    render() {
        return(
            <React.Fragment>
                <Jumbotron>
                <div>
                    <h1>Welcome</h1>
                    <p class="lead">Your message here</p>
                    <p><a href="http://www.YourLinkHere.com" class="btn btn-primary btn-lg">Learn more &raquo;</a></p>
                </div>
                </Jumbotron>

            </React.Fragment>
        );
    }
}
    
export default Jumbo;
