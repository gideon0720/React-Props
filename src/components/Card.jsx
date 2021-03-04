import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';

function Card(props) {
  console.log(props);
  return (
    <div className='card'>
      <div className='top'>
        <p style={{ marginLeft: '20px' }}>{props.id}</p>
        <h2 className='name'>{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className='bottom'>
        <Detail detail={props.tel} />
        <Detail detail={props.email} />
      </div>
    </div>
  );
}

export default Card;
