import React from 'react';

function Detail(props) {
  console.log(props);
  return <p className='info'>{props.detail}</p>;
}

export default Detail;
