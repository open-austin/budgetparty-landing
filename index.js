import React, { Component } from 'react';
import Contributors from './components/contributors';

import logoAustinMonitor from './img/austin-monitor-circle-logo.png';
import logoGlasshouse from './img/glasshouse-policy-circle-logo.png';
import logoMozilla from './img/mozilla-circle-logo.png';
import logoOpenAustin from './img/open-austin-circle-logo.png';

require('./style.css');

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { contributors: [] };
  }

  componentWillMount() {
    fetch(this.props.contributorsURL)
      .then(response => response.json())
      .then(contributors => this.setState({ contributors }));
  }

  render() {
    return <div id="landing">
      <section className="section">
        <div className="container">
          <h1>Budget Party</h1>
          <h3>Understand & Augment a City Budget for Austin</h3>
          <p>
            <button className="btn">Start Budgeting</button>
          </p>
          <h1>You Have a Voice!</h1>
          <h3>City Spending Doesn't Have to Be Mystical</h3>
          <p>Commuting, construction, parks, public safety—every day you are impacted by city budget decisions.</p>
        </div>
      </section>
      <section className="section section-secondary">
        <div className="container">
          <h1 className="header-light">Try Out The Beta Version Of Budget Party</h1>
          <p>
            <button className="btn btn-secondary">Start Budgeting</button>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1>It's A Party!</h1>
          <h3>Let’s work together to make Participatory Budgeting work for our city</h3>
          <p><em>A few of our Budget Party</em></p>
          <Contributors contributors={this.state.contributors}/>
          <p>We want to work with our neighbors to create an open source platform for citizen inclusion</p>
          <p>Our team currently includes developers, designers, a publisher, a curriculum writer and educators</p>
          <p>
            <button className="btn">Start Budgeting</button>
          </p>
        </div>
      </section>
      <section className="section section-tertiary">
        <div className="container">
          <h1>Support & More</h1>
          <h3>A few of the awesome organizations that have funded and supported budget party.</h3>
          <ul className="bubble-list">
            <li className="bubble"><img src={logoAustinMonitor} height="100" width="100"/></li>
            <li className="bubble"><img src={logoGlasshouse} height="100" width="100"/></li>
            <li className="bubble"><img src={logoMozilla} height="100" width="100"/></li>
            <li className="bubble"><img src={logoOpenAustin} height="100" width="100"/></li>
          </ul>
          <ul className="link-list">
            <li><a href="#">Open Budget Party</a></li>
            <li><a href="#">Application</a></li>
            <li><a href="#">Get Involved</a></li>
            <li><a href="#">View Budget Party on Github</a></li>
            <li><a href="#">Contact or Submit Feedback</a></li>
          </ul>
        </div>
      </section>
    </div>;
  }
}

Landing.defaultProps = {
  contributorsURL: 'https://api.github.com/repos/open-austin/budgetparty/contributors'
};