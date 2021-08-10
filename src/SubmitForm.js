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
      Email: ''
    });
  };

  render() {
    return (
      <>
        <p>{this.state.Name}</p>
        <div id="form">
          <form>
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
            <button onClick={this.props.handleFormSubmit}>Submit</button>
          </form>
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

            {this.state.items.map(item => {
              return (
                <tr>
                  <td>{items.Name}</td>
                  <td>{items.Email}</td>
                  <td>{items.MobileNo}</td>
                  <td>{item.Designation}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </>
    );
  }
}
export default SubmitForm;
