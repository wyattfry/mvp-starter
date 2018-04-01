import React from 'react';
import $ from 'jquery';
import axios from 'axios';


class Submit extends React.Component {
  constructor(props) {
    super(props);
    $('.ticket-submit-form').on('submit', this.handleSubmit);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    alert('here');
    e.preventDefault();
    console.log('handleSubmit:', e);
  }
  render() {
    return (
      <div>
        <h1>Submit a support ticket</h1>
        <form className="ticket-submit-form">
          <input type='text' placeholder='Your name' autoComplete='name' /><br />
          <input type='text' placeholder='Your email address' autoComplete='email' /><br />
          <input type='text' placeholder='Problem summary' /><br />
          <textarea type='text' placeholder='description' /><br />
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
          <button className='submit-button'>Submit</button>
          </form>
        <ul>
          <li><a href='/check-ticket-status/'>Check status of a ticket</a></li>
          <li><a href='/dashboard/'>Go to dashboard</a></li>
        </ul>
      </div>
    );
  }
}

export default Submit;