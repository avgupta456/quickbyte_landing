import React from 'react';

import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const USER_ID = process.env.USER_ID;

// Email validation
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.toastifySuccess = this.toastifySuccess.bind(this);
    this.toastifyFail = this.toastifyFail.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.resetForm = this.resetForm.bind(this);

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  }

  toastifySuccess() {
    toast.success('Form sent!', {
      position: 'top-right',
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
    });
  }

  toastifyFail() {
    toast.error('Form failed to send!', {
      position: 'top-right',
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback fail',
    });
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    const formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? ''
          : 'Please enter a valid email address.';
        break;
      case 'subject':
        formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? 'Please enter a message' : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, subject, message } = this.state;

      emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name, email, subject, message },
        USER_ID,
      );

      this.toastifySuccess();
      this.resetForm();
    } else {
      this.toastifyFail();
    }
  }

  // Function to reset form
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  render() {
    const { formErrors } = this.state;

    return (
      <div className="w-screen h-screen bg-gray-50 px-8 lg:px-16 pt-8">
        <h4 className="text-5xl font-bold text-center text-red-500">
          Contact Us
        </h4>
        <p className="text-xl lg:text-2xl text-center text-gray-700">
          We will get back to you shortly!
        </p>
        <form
          id="contact-form"
          className="lg:px-8 pt-8 lg:pt-16 flex flex-row flex-wrap"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <div className="w-full lg:w-1/2 h-20 px-4">
            <input
              type="text"
              className="mt-1 block w-full"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              noValidate
            />
            {formErrors.name.length > 0 && (
              <span className="text-red-500 font-bold">{formErrors.name}</span>
            )}
          </div>

          <div className="w-full lg:w-1/2 h-20 px-4">
            <input
              type="text"
              className="mt-1 block w-full"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              noValidate
            ></input>
            {formErrors.email.length > 0 && (
              <span className="text-red-500 font-bold">{formErrors.email}</span>
            )}
          </div>

          <div className="w-full h-20 px-4">
            <input
              type="text"
              className="mt-1 block w-full"
              placeholder="Subject"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
              noValidate
            ></input>
            {formErrors.subject.length > 0 && (
              <span className="text-red-500 font-bold">
                {formErrors.subject}
              </span>
            )}
          </div>
          <div className="w-full h-40 px-4">
            <textarea
              rows="5"
              className="mt-1 block w-full"
              placeholder="Message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              noValidate
            ></textarea>
            {formErrors.message.length > 0 && (
              <span className="text-red-500 font-bold">
                {formErrors.message}
              </span>
            )}
          </div>
          <button
            className="mx-auto mt-4 bg-red-500 transition duration-500 ease-in-out hover:bg-red-700 transform hover:scale-110 text-white font-bold py-2 px-8 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default Contact;
