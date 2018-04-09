import React from 'react';

const ListItem = (props) => (
  <tr className='ticketList' onClick={ () => props.handleClick(props.item._id) }>
    <td>{ props.item._id }</td>
    <td>{ props.item.status }</td>
    <td className={ props.item.priority }>{ props.item.priority }</td>
    <td>{ props.item.name }</td>
    <td>{ props.item.headline }</td>
  </tr>
)

export default ListItem;