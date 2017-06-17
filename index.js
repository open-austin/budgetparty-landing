import React, { Component } from 'react';

require('./style.css');

export default class Landing extends Component {
  render() {
    return <div id="landing">
      <h1>hi</h1>
      <h2>h2 example</h2>
      <h3>h3 example</h3>
      <h4>h4 example</h4>
      <p>a paragraph a <a href="#">paragraph</a></p>
    </div>;
  }
}
