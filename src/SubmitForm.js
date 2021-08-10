import React, { Component } from 'react';

class SubmitForm extends Component {
  constructor() {
    super();
    this.state = {
      Name: 'Sudha',
      Email: 'sudhareddy.pam@gmail.com',
      MobileNo: 9000000000,
      Designation: 'Good'
    };
  }

  render() {
    return (
      <>
        <p>{this.state.Name}</p>
        <div id="form">
          <input type="text" placeholder="Name" autofocus />
          <br />
          <br />
          <input type="email" placeholder="Email" />
          <br />
          <br />
          <input type="number" placeholder="MobileNo" />
          <br />
          <br />
          <input type="text" placeholder="Designation" />
          <br />
          <br />
          <button
            onClick={() => {
              this.setState({ Name: '' });
            }}
          >
            Submit
          </button>
        </div>
        <br />
        <br />
        <div id="table">
          <table border="1">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>MobileNo</th>
              <th>Designation</th>
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
            </tr>
          </table>
        </div>
      </>
    );
  }
}
export default SubmitForm;
