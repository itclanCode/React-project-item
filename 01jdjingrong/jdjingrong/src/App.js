import React, { Component,Fragment } from 'react';
import Index from './pages/index/index'

import './common/border.css' // 引入一像素边框
import './common/base.css'   // 引入基础重置样式


class App extends Component {

  render() {
    return (
      <div className="App">
        <Fragment>
              <Index />
        </Fragment>
       
      </div>
    );
  }
}

export default App;
