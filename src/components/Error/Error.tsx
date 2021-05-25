import React, { FC } from 'react';
import { BsExclamation } from 'react-icons/bs'

interface ErrorProps {
  message: string
}

const Error: FC<ErrorProps> = ({message}) => {
  return (
    <p className="error">
        <BsExclamation className="error__exclamation"/>{message}
    </p>
  )
}

export default Error;
