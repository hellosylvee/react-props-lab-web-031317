import React from 'react';
import ReactDOM from 'react-dom';

const spaceshipColors = ['black', 'red']

class Spaceship extends React.Component{
  render() {
    return (
      <div>
        <p>Name: {this.props.name} alt={this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    );
  }
};

Spaceship.defaultProps = {
  hasRockets: false,
  colors: spaceshipColors
};

export default Spaceship;
