import React from 'react';
import loading from '../media/loading.gif';

function Loading() {
  return (
    <img src={loading} alt="loading" className="md:w-1/4"/>
  )
}

export default Loading;