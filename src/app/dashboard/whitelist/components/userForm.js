// @flow

import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'carbon-components-react'
import { TextInput } from 'polymath-ui'
import { required, ethereumAddress } from 'polymath-ui/dist/validate'

import DatePickerSingleInput from './DatePickerSingleInput'

export const formName = 'user_form'

type Props = {||}

class InvestorForm extends Component<Props> {
  render () {
    return (
      <Form>
        <Field
          name='address'
          component={TextInput}
          label='Eth Address'
          placeholder='Investor Address'
          validate={[required, ethereumAddress]}
        />
        <Field
          name='sell'
          component={DatePickerSingleInput}
          label='Sell Restriction Date'
          validate={[required]}
          placeholder='mm/dd/yyyy'
        />
        <Field
          name='buy'
          component={DatePickerSingleInput}
          label='Buy Restriction Date'
          validate={[required]}
          placeholder='mm/dd/yyyy'
        />
      </Form>
    )
  }
}

export default reduxForm({
  form: formName,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(InvestorForm)
