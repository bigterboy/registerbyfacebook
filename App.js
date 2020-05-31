/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  SafeAreaView,
  View,
  Button,
  TouchableOpacity,
  Animated,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Router from './router';
import { Provider } from 'react-redux';
// import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from "./redux/store";
import Home from './screen/MainHomeTab';

import { persistStore, persistReducer } from 'redux-persist'


export default class App extends Component {
  constructor() {
    super();
    this.persistor = persistStore(store);
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}
