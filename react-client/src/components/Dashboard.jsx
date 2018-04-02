import React from 'react';

import List from './List.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTicket: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id) {
    for (let i = 0; i < this.props.tickets.length; i++) {
      if (this.props.tickets[i]._id === id) {
        this.setState({selectedTicket: this.props.tickets[i]});
      }
    }
  }
  render () {
    return (<div>
      <h1>Support Ticket System Dashboard</h1>
      <h2>Selected Ticket:</h2>
      <table>
        <tbody>
          <tr><td>Headline:</td><td></td>{this.state.selectedTicket.headline}</tr>
          <tr><td>Ticket ID:</td><td></td>{this.state.selectedTicket._id}</tr>
          <tr><td>Description:</td><td></td>{this.state.selectedTicket.description}</tr>
          <tr><td>Created at:</td><td></td>{this.state.selectedTicket.createdAt}</tr>
          <tr><td>Priority:</td><td></td>{this.state.selectedTicket.priority}</tr>
          <tr><td>Category:</td><td></td>{this.state.selectedTicket.category}</tr>
          <tr><td>Customer Name:</td><td></td>{this.state.selectedTicket.name}</tr>
          <tr><td>Customer Email:</td><td></td>{this.state.selectedTicket.email}</tr>
          <tr><td>Support Employee ID:</td><td></td>{this.state.selectedTicket.supportEmployeeId}</tr>
          <tr><td>Status:</td><td></td>{this.state.selectedTicket.status}</tr>
          <tr><td>History:</td><td></td>{this.state.selectedTicket.history}</tr>
        </tbody>
      </table>
      <h2>Open tickets</h2>
      <List items={ this.props.tickets } handleClick={this.handleClick} />
      <a href='/submit/'>Go to ticket submit page</a>
    </div>)
  }
}

export default Dashboard