import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';
import map from 'lodash/map';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      restaurants: null
    };
    this.restaurantsRef = database.ref('/restaurants');

  }

  componentDidMount(){
    auth.onAuthStateChanged((currentUser)=> {

      console.log('Auth Changed', currentUser);
      this.setState({ currentUser });

      this.restaurantsRef.on('value', (snapshot)=> {
      this.setState({ restaurants: snapshot.val() });
      console.log(snapshot.val());
      });
    });
  }
// && is used in place of turnary if you have only one option.
  render() {
    const { currentUser, restaurants } = this.state;
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
        <div>

          {!currentUser && <SignIn />}
          {currentUser &&
            <div>
              <NewRestaurant />
              <Restaurants restaurants= { restaurants } user= { currentUser }/>
              <CurrentUser user={ currentUser }/>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Application;
