import React, { Component } from 'react'
import { Button, Header, Card, CardSection, Input } from './common'

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  componentWillMount() {

  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='user@email.com'
            label="Email"
            value={ this.state.email }
            onChangeText={ email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            value={ this.state.password }
            onChangeText={ password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={ this.onButtonPress }>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
