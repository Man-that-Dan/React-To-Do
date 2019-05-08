import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header() {
  return (
    <header style={headerStyle}>
      <h1> Todo List </h1>
      <Link style={linkStyle} to="/">Home</Link>
      <p></p>
      <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#f40000',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'

}

const linkStyle = {
  color: '#ffff',
  textDecoration: 'none'
}

export default Header;
