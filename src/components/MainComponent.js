import React, { Component } from 'react';
import Home from './HomeComponent';
import { HOMECARDS } from '../shared/homecards';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Shop from './ShopComponent';
import Support from './SupportComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import { ABOUTCARDS } from '../shared/aboutcards';
import { BOARDCARDS } from '../shared/boardcards';
import { SHOPCARDS } from '../shared/shopcards';
import { SUPPORTCARDS } from '../shared/supportcards';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            homecards: HOMECARDS,
            aboutcards: ABOUTCARDS,
            boardcards: BOARDCARDS,
            shopcards: SHOPCARDS,
            supportcards: SUPPORTCARDS
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route
                        path='/home'
                        render={() => (
                            <div>
                                <Jumbotron fluid>
                                    <h1 className='display-3'>Supporting Foster Families</h1>
                                    <p className='lead'>Providing the necessities to help ease the transition</p>
                                    <Button color='danger' tag='a' href='/support'>DONATE</Button>
                                </Jumbotron>
                                <Home homecards={this.state.homecards} />
                            </div>
                        )}
                    />

                    <Route exact path='/about' render={() => <About aboutcards={this.state.aboutcards} boardcards={this.state.boardcards} />} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/shop' render={() => <Shop shopcards={this.state.shopcards} />} />
                    <Route exact path='/support' render={() => <Support supportcards={this.state.supportcards} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
