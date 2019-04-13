import React from 'react';
import Main from "./containers/Main";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, (applyMiddleware(thunk)));


export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Main/>
        </Provider>
    );
  }
}
