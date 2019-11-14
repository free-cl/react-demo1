import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './style.scss';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img src={logo} className="logo" alt="logo" />
      </div>
    );
  }
}
export default Home;
