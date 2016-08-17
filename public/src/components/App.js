import React, {Component} from 'react';// eslint-disable-line no-unused-vars

import CakeList from '../container/CakeList';
import Logo from './Logo';
import SlideShow from './SlideShow';


class App extends Component {
  render() {
    return (
        <div>
          <Logo/>
          <SlideShow/>
        </div>
    );
  }
}

export default App;
