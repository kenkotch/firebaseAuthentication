import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD6mFmQJzqHoUfRyy2sSQXZfWwPicNI-70',
      authDomain: 'authentication-caa5c.firebaseapp.com',
      databaseURL: 'https://authentication-caa5c.firebaseio.com',
      projectId: 'authentication-caa5c',
      storageBucket: 'authentication-caa5c.appspot.com',
      messagingSenderId: '961244912211'
    })
  }

  render() {
    console.disableYellowBox = true
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
