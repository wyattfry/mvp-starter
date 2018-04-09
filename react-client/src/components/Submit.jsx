import React from 'react';
import $ from 'jquery';
import axios from 'axios';


class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    const ticket = {
      headline: $('.headline').val(),
      description: $('.description').val(),
      createdAt: Date.now(),
      priority: $('.priority-select').val(),
      category: $('.category-select').val(),
      name: $('.name').val(),
      email: $('.email').val(),
      status: 'open',
      resolved: false,
    };
    $('.headline').val('');
    $('.description').val('');
    $('.priority-select').selectedIndex = 0;
    $('.category-select').selectedIndex = 0;
    $('.name').val('');
    $('.email').val('');
    axios.post('/api/tickets', ticket)
      .then(res => {
        // console.log('POSTed new ticket\n', res);
        $('.alertToUserSpan').html(`Thank you for submitting a ticket. Your ticked ID number is <strong>${res.data._id}</strong>`);
      })
      .catch(err => {console.error('Could not POST new ticket\n', err)});
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
          <select className='priority-select'>
            <option value='high'>High</option>
            <option value='medium'>Medium</option>
            <option value='low'>Low</option>
          </select><br />
          <span>Category:</span><br />
          <select className='category-select'>
            <option value='sales'>Sales</option>
            <option value='service'>Service</option>
            <option value='general'>General</option>
          </select><br />
          <button className='submit-button' onClick={this.handleSubmit}>Submit</button><br />
          <span className='alertToUserSpan' />
        <ul>
          <li><a href='/check-ticket-status/'>Check status of a ticket</a></li>
          <li><a href='/dashboard/'>Go to dashboard</a></li>
        </ul>
      </div>
    );
  }
}

export default Submit;