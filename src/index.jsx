import React from 'react';
import ReactDOM from "react-dom";
class EmailCaptureForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: this.props.headerText || "Sign up for our mailing list",
      successText: this.props.successText || "Thank you for subscribing",
      firstNameError: this.props.firstNameError || "Please enter your first name",
      showFirstNameError: this.props.showFirstNameError || false,
      emailError: this.props.emailError || "Please enter a valid email",
      showEmailError: this.props.showEmailError || false,
      name: "",
      email: "",
    };
  }

  setUserInfo(e) {
    const attributes = {};
    attributes[e.target.name] = e.target.value;
    this.setState(attributes);
  }

  emailInvalid() {
    const email = this.state.email;
    return email.length == 0 || !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(email))
  }

  submitInformation(e) {
    e.preventDefault();
    const errors = {};

    if(!this.state.name) {
      errors.showFirstNameError = true;
    }

    if(this.emailInvalid(this.state.email)) {
      errors.showEmailError = true;
    }
    if(Object.keys(errors).length) {
      this.setState(errors);
    }
  }

  render() {
    let firstNameError;
    let emailError;

    if(this.state.showFirstNameError) {
      firstNameError = <div className="first-name-error">{ this.state.firstNameError }</div>;
    }

    if(this.state.showEmailError) {
      emailError = <div className="email-error">{ this.state.emailError }</div>;
    }

    return (
      <div className="email-capture-form">
      	<h3 className="center">{ this.state.headerText }</h3>
        <div className="hidden email-capture-form-success-message">{ this.state.successText }</div>
        <form onSubmit={ this.submitInformation.bind(this) }>
          <input type="text" name="name" placeholder="First name" onChange={ this.setUserInfo.bind(this) }/>
          { firstNameError }
          <input type="text" name="email" placeholder="Email" onChange={ this.setUserInfo.bind(this) }/>
          { emailError }
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EmailCaptureForm;

// const node = document.getElementById("app");
// ReactDOM.render(<EmailCaptureForm />, node)
