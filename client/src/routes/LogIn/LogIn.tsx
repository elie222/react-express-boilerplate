import * as React from 'react'
import LogInForm from '../../components/LogInForm'

export interface LogInProps {}

export default class LogIn extends React.Component<LogInProps, any> {
  render() {
    return (
      <div>
        <LogInForm />
      </div>
    )
  }
}
