import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    System contains { props.items.length } ticket(s).
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Priority</th>
          <th>User Name</th>
          <th>Headline</th>
        </tr>
    { props.items.map(item => <ListItem key={ item._id } item={item} handleClick={props.handleClick} />)}
      </tbody>
    </table>
  </div>
)

export default List;