// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { GraphQLObjectType } from 'graphql'
import type { GraphQLOutputType } from 'graphql'

// The following line (12) is detected as a flow error by the plugin and flow cli
const x: number = "lol"

// The following line (15) is detected as a flow error by the flow CLI, but not the plugin
const y: GraphQLOutputType = new GraphQLObjectType({
  name: 'foo'
  // fields: (missing, flow should complain)
})

console.log(x, y)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
