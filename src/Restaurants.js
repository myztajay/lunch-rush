import React, { Component, PropTypes } from 'react';
import Restaurant from './Restaurant';
import { database } from './firebase';
import map from 'lodash/map';
import './Restaurants.css';

class Restaurants extends Component {
  constructor(props) {
    super(props);
  }
  handleSelect(key) {
    const user = this.props.user;
    database.ref('/restaurants')
      .child(key)
      .child('votes')
      .child(user.uid)
      .set(user.displayName);
  }

  handleDeselect(key) {
      console.log("deselected");
    const user = this.props.user;
    database.ref('/restaurants')
      .child(key)
      .child('votes')
      .child(user.uid)
      .remove();

  }
  render () {
    const { restaurants } = this.props;
    return (
      <section className="Restaurants">
        {map (restaurants, (restaurant, key) =>{
         return <Restaurant
                  key={key}
                  { ...restaurant }
                  handleSelect={ () => this.handleSelect(key) }
                  handleDeselect={ () => this.handleDeselect(key) }
                />;
        })
        }
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
