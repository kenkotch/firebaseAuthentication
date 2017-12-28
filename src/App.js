import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, CardSection, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD6mFmQJzqHoUfRyy2sSQXZfWwPicNI-70',
      authDomain: 'authentication-caa5c.firebaseapp.com',
      databaseURL: 'https://authentication-caa5c.firebaseio.com',
      projectId: 'authentication-caa5c',
      storageBucket: 'authentication-caa5c.appspot.com',
      messagingSenderId: '961244912211'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut() }>
              Log Out
            </Button>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner />
    }
  }

  render() {
    console.disableYellowBox = true
    return (
      <View>
        <Header headerText="Authentication" />
        { this.renderContent() }
      </View>
    )
  }
}

export default App
