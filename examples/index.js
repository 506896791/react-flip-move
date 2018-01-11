import React, { Component, PropTypes }    from 'react';
import ReactDOM, { render }               from 'react-dom';
import classNames                         from 'classnames';
import { Router, Route, Link }            from 'react-router';

import Header   from './components/Header.jsx';
import Shuffle  from './components/1_Shuffle.jsx';
import Square   from './components/2_Square.jsx';

require('./scss/main.scss');


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        { this.props.children }
      </div>
    );
  }
};

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="shuffle" component={Shuffle} />
      <Route path="square" component={Square} />
    </Route>
  </Router>
), document.getElementById('app'))
