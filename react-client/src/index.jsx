import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './components/List.jsx';
import Submit from './components/Submit.jsx';
import Dashboard from './components/Dashboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }
  componentDidMount() {
    axios.get('/api/tickets')
      .then(data => this.setState({items: data.data}))
      .catch(err => console.log('Failed loading tickets\n', err))
  }
  render () {
    if (window.location.pathname.split('/')[1] === 'dashboard') {
        return <Dashboard tickets={this.state.items} />;
    }
    if (window.location.pathname === '/check-ticket-status/') {
      return (<div>
        <h1>Check ticket status</h1>
        <form>
          <input placeholder="Ticket ID Number" /><br />
          <span>Lost your ticket ID? Enter your email address and we will send you a list of all your open tickets:</span><br />
          <input type='text' placeholder="Your email address" />
          <button>Submit</button>
        </form>
        <a href='/submit/'>Go to ticket submit page</a>
      </div>)
    }
    if (window.location.pathname === '/submit/') {
      return <Submit />;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));