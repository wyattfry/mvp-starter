import React from 'react';

import List from './List.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  getSelectedTicket() {
    console.log()
    if (window.location.pathname.split('/').length === 4) {
      return <span>Ticket #{window.location.pathname.split('/')[2]}</span>
    }
    return <span>None selected</span>
  }
  render () {
    return (<div>
      <h1>Support Ticket System Dashboard</h1>
      <h2>Selected Ticket:</h2>
        {this.getSelectedTicket()}
      <h2>Open tickets</h2>
      <List items={this.state.items} />
      <a href='/submit/'>Go to ticket submit page</a>
    </div>)
  }
}

export default Dashboard