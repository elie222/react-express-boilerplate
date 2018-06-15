import * as React from 'react'
import LogInForm from './LogInForm'

export interface LogInFormContainerProps {}

export default class LogInFormContainer extends React.Component<
  LogInFormContainerProps,
  any
> {
  public render() {
    return (
      <div>
        <LogInForm handleOk={this.handleOk} loading={false} />
      </div>
    )
  }

  private handleOk = () => console.log('Log In')
}
