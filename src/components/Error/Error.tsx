import React from 'react';
import { BsExclamation } from 'react-icons/bs'

const Error = () => {
  return (
    <p className="error">
        <BsExclamation className="error__exclamation"/>Please pick at least one day
    </p>
  )
}

export default Error;
