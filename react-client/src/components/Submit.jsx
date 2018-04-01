import React from 'react';
import $ from 'jquery';
import axios from 'axios';


class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    console.log('handleSubmit:', e);
    const ticket = {
      headline: $('.headline').val(),
      description: $('.description').val(),
      createdAt: Date.now(),
      priority: String,
      category: String,
      name: $('.name').val(),
      email: $('.email').val(),
      status: 'open',
      resolved: false,
    };

  }
  render() {
    return (
      <div>
        <h1>Submit a support ticket</h1>
          <input className='name' type='text' placeholder='Your name' autoComplete='name' /><br />
          <input className='email' type='text' placeholder='Your email address' autoComplete='email' /><br />
          <input className='headline' type='text' placeholder='Problem summary' /><br />
          <textarea className='description' type='text' placeholder='description' /><br />
          <span>Priority:</span><br />
          <select>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select><br />
          <span>Category:</span><br />
          <select>
            <option>Sales</option>
            <option>Service</option>
            <option>General</option>
          </select><br />
          <button className='submit-button' onClick={this.handleSubmit}>Submit</button>
        <ul>
          <li><a href='/check-ticket-status/'>Check status of a ticket</a></li>
          <li><a href='/dashboard/'>Go to dashboard</a></li>
        </ul>
      </div>
    );
  }
}

export default Submit;