import React, { Component } from 'react';

class SubmitForm extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <input type="text" placeholder="Name" autofocus />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="MobileNo" />
        <input type="text" placeholder="Comments" />
        <button>Submit</button>
      </>
    );
  }
}
export default SubmitForm;
