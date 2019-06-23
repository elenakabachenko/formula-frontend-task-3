import React, { Component } from 'react'
import _ from 'lodash'
import { TextInput, TextArea, SubmitButton } from '../../common'
import validate from './validate';
import './style.scss'

export default class Contact extends Component {

  state = {
    name: '',
    email: '',
    comment: '',
    errors: {},
    isLoading: false,
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: _.omit(this.state.errors, [e.target.name])
    })
  }

  isButtonDisabled = () => {
    const { name, email, comment, errors } = this.state;
    return (_.isEmpty(name) && _.isEmpty(email) && _.isEmpty(comment)) || !_.isEmpty(errors)
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      this.setState({ isLoading: true, errors: {} })
      const { isValid, errors } = validate(this.state)
      if (!isValid) {
        console.log(errors)
        this.setState({ errors });
        return
      }

      await fetch('https://formula-test-api.herokuapp.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(_.pick(this.state, ['name', 'email', 'comment']))
      })

      this.setState({ name: '', email: '', comment: '' });
    } catch (e) {
      console.error(e)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { name, email, comment, isLoading, errors } = this.state
    return (
      <form className="sect-form" onSubmit={this.handleSubmit}>
        <TextInput type="text" placeholder="Name" name="name" value={name}
          onChange={this.handleChange} error={errors.name} />
        <TextInput type="email" placeholder="Email" name="email" value={email}
          onChange={this.handleChange} error={errors.email} />
        <TextArea name="comment" className="input-comment"
          placeholder="Your comment" value={comment}
          onChange={this.handleChange} error={errors.comment} />
        <SubmitButton className="btn_sendmsg" text="Send" isLoading={isLoading} disabled={this.isButtonDisabled()} />
      </form>
    )
  }
}