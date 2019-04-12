import React, { Component } from 'react';
import Home from './HomeComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Volunteer from './VolunteerComponent';
import Shop from './ShopComponent';
import Donate from './DonateComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom'


class Main extends Component {

    constructor(props) {
    super(props);
    }

    render() {
    const HomePage = () => {
        return(
            <Home 
                ADD HOME
            />
        );
    }

    return (
        <div>
            <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/donate' component={Donate} />
                    <Route exact path='shop' component={Shop} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/voluneteer' component={Volunteer} />
                    <Redirect to="/home" />
                </Switch>
            <Footer />
        </div>
    );}
}

export default Main;