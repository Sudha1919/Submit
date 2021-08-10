import React, { Component } from 'react';

class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      MobileNo: 0,
      Designation: '',
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({Name: this.state.Name, Email: this.state.Email});

    this.setState({
      items,
      Name: '',
      Email: ''
    });
  };
 
  render() {
    return (
      <>
        <p>{this.state.Name}</p>
        <div id="form">
          <input type="text" placeholder="Name" />
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
          <button >Submit</button>
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

            {
              <tr>
                <td></td>
                <td />
                <td />
                <td />
              </tr>
            }
          </table>
        </div>
      </>
    );
  }
}
export default SubmitForm;
