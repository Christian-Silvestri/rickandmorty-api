import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
  const {id} = useParams();
  return (
    <div>CardDetails</div>
  )
}

export default CardDetails