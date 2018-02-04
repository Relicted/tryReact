import React, { Component } from 'react';


class RegistrationForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('form submitted')
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
    console.log(this.state.email)
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit.bind(this)}>
          <input type="email"
                 placeholder='E-mail'
                 value={this.state.email}
                 onChange={this.handleEmailChange.bind(this)}/>
          <button>Ok</button>
          <div ><h1>hello</h1></div>
        </form>
      </div>
    )
  }
}

export default RegistrationForm;

