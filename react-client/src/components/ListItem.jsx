import React from 'react';

const ListItem = (props) => (
  <tr onClick={ () => props.handleClick(props.item._id) }>
    <td>{ props.item._id }</td>
    <td>{ props.item.status }</td>
    <td>{ props.item.priority }</td>
    <td>{ props.item.name }</td>
    <td>{ props.item.headline }</td>
  </tr>
)

export default ListItem;