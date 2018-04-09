import React from 'react';
import axios from 'axios';
import $ from 'jquery';

import List from './List.jsx';

const DetailViewer = props => (
  <div>
    <table>
      <tbody>
        <tr><td className='headerColumn'>Headline:</td><td>{props.ticket.headline}</td></tr>
        <tr><td className='headerColumn'>Ticket ID:</td><td>{props.ticket._id}</td></tr>
        <tr><td className='headerColumn'>Description:</td><td>{props.ticket.description}</td></tr>
        <tr><td className='headerColumn'>Created at:</td><td>{props.ticket.createdAt}</td></tr>
        <tr><td className='headerColumn'>Priority:</td><td>{props.ticket.priority}</td></tr>
        <tr><td className='headerColumn'>Category:</td><td>{props.ticket.category}</td></tr>
        <tr><td className='headerColumn'>Customer Name:</td><td>{props.ticket.name}</td></tr>
        <tr><td className='headerColumn'>Customer Email:</td><td>{props.ticket.email}</td></tr>
        <tr><td className='headerColumn'>Support Employee ID:</td><td>{props.ticket.supportEmployeeId}</td></tr>
        <tr><td className='headerColumn'>Status:</td><td>{props.ticket.status}</td></tr>
        <tr><td className='headerColumn'>History:</td><td>{props.ticket.history}</td></tr>
      </tbody>
    </table>
    <button onClick={props.closeTicket}>Close Ticket</button>
  </div>
);

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTicket: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeTicket = this.closeTicket.bind(this);
  }
  closeTicket() {
    let ticketToUpdate = this.state.selectedTicket;
    ticketToUpdate.status = 'closed';
    ticketToUpdate.resolved = true;
    ticketToUpdate.resolvedAt = Date.now();
    this.setState({selectedTicket: ticketToUpdate});
    axios.put('/api/tickets', ticketToUpdate)
      .then((res) => {console.log('PUT request set, here is what came back:\n', res)})
      .catch((err) => {console.error('PUT request FAILED:\n', err)});
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
      <h2>Selected Ticket</h2>
      {$.isEmptyObject(this.state.selectedTicket) ? <span>None selected</span> : <DetailViewer closeTicket={this.closeTicket} ticket={this.state.selectedTicket} />}
      <h2>Open tickets</h2>
      <List items={ this.props.tickets } handleClick={this.handleClick} />
      <a href='/submit/'>Go to ticket submit page</a>
    </div>)
  }
}

export default Dashboard;
