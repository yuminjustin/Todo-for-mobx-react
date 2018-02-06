import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Heads from './head'
import List from './list'
import Footer from './foot'

@observer
export default class Test extends Component {

  render() {
    let { todos, types } = this.props;
    return (
      <div className="mainbox m oh">
        <h1>mobx todo</h1>
        <Heads todos={todos} />
        <div className="c oh listbox">
          <List todos={todos} types={types} />
        </div>
        <Footer todos={todos} types={types} />
      </div>
    );
  }
}