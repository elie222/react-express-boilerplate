import * as React from 'react'
import Form, { FormComponentProps } from 'antd/lib/form/Form'
import FormItem from 'antd/lib/form/FormItem'
import { Button, Row, Input } from 'antd'

export interface LogInFormProps {
  handleOk: () => void
  loading: boolean
}

class LogInForm extends React.Component<
  LogInFormProps & FormComponentProps,
  any
> {
  render() {
    const {
      form: { getFieldDecorator },
      handleOk,
      loading,
    } = this.props

    return (
      <div>
        <form>
          <FormItem hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input onPressEnter={handleOk} placeholder="Username" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                },
              ],
            })(
              <Input
                type="password"
                onPressEnter={handleOk}
                placeholder="Password"
              />
            )}
          </FormItem>
          <Row>
            <Button
              type="primary"
              onClick={handleOk}
              // loading={loading.effects.login}
              loading={loading}
            >
              Log in
            </Button>
            <p>
              <span>Username：guest</span>
              <span>Password：guest</span>
            </p>
          </Row>
        </form>
      </div>
    )
  }
}

export default Form.create()(LogInForm)
