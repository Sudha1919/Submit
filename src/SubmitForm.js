import React, { Component } from 'react';

class SubmitForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      mobileno: '',
      designation: '',
      employees: []
    };
  }

  render() {
    return (
      <>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="MobileNo"
            name="mobileno"
            value={this.state.mobileno}
            onChange={e => this.setState({ mobileno: e.target.value })}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Designation"
            name="designation"
            value={this.state.designation}
            onChange={e => this.setState({ designation: e.target.value })}
          />
          <br />
          <br />
          <button
            onClick={() => {
              this.setState({
                employees: [
                  ...this.state.employees,
                  {
                    name: this.state.name,
                    email: this.state.email,
                    mobileno: this.state.mobileno,
                    designation: this.state.designation
                  }
                ],
                name: '',
                email: '',
                mobileno: '',
                designation: ''
              });
            }}
          >
            Submit
          </button>
        </div>
        <br />
        <br />

        <table border="1">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>MobileNo</th>
            <th>Designation</th>
          </tr>

          {this.state.employees.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobileno}</td>
              <td>{item.designation}</td>
            </tr>
          ))}
        </table>
      </>
    );
  }
}
export default SubmitForm;
