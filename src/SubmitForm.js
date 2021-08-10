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
  }
  handleFormSubmit = e => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      Name: this.state.Name,
      Email: this.state.Email,
      MobileNo: this.state.MobileNo,
      Designation: this.state.Designation
    });

    this.setState({
      items,
      Name: '',
      Email: '',
      MobileNo: 0,
      Designation: ''
    });
  };

  handleInputChange = e => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    const items = this.state.items;
    return (
      <>
        <p>{this.state.Name}</p>
        <div id="form">
          <form>
            <input
              type="text"
              placeholder="Name"
              onChange={this.state.handleInputChange}
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="Email"
              onChange={this.state.handleInputChange}
            />
            <br />
            <br />
            <input
              type="number"
              placeholder="MobileNo"
              onChange={this.state.handleInputChange}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Designation"
              onChange={this.state.handleInputChange}
            />
            <br />
            <br />
            <button onSubmit={this.state.handleFormSubmit}>Submit</button>
          </form>
        </div>
        <br />
        <br />
        <div id="table">
          <table border="1">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>MobileNo</th>
                <th>Designation</th>
              </tr>

              {this.state.items.map(item => {
                return (
                  <tr>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.MobileNo}</td>
                    <td>{item.Designation}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default SubmitForm;
