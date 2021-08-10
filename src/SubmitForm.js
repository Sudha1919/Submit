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

  render() {
    const items = this.state.items;
    return (
      <>
        <p>{this.state.items[0]}</p>
        <div id="form">
          <form>
            <input
              type="text"
              placeholder="Name"
              value={this.state.Name}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={this.state.Email}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <br />
            <br />
            <input
              type="number"
              placeholder="MobileNo"
              value={this.state.MobileNo}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Designation"
              value={this.state.Designation}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <br />
            <br />
            <button
              onClick={() => {
                this.setState({
                  items: [
                    ...this.state.items,
                    {
                      Name: this.state.Name,
                      Email: this.state.Email,
                      MobileNo: this.state.MobileNo
                    }
                  ],
                  name: '',
                  age: ''
                });
              }}
            >
              Submit
            </button>
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
