import React, { Component } from 'react';

class SubmitForm extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <input type="text" placeholder="Name" autofocus />
        <br />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <br />
        <input type="number" placeholder="MobileNo" />
        <br />
        <br />
        <input type="text" placeholder="Comments" />
        <br />
        <br />
        <button>Submit</button>
      </>
    );
  }
}
export default SubmitForm;
