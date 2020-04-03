import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './style/index.less';

const obj = _.cloneDeep({})

class App extends React.Component {
    render(props) {
      return (
        <div>
          Hello {this.props.name}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <App name="React" />,
    document.getElementById('app')
  );