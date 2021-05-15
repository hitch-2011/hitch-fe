import React, { Dispatch, FC, SetStateAction } from 'react';

interface FormProps {
  header: string
  inputs: Array<Inputs>
}

interface Inputs {
  property: string
  method: Dispatch<SetStateAction<string>>
  placeholder: string
  type?: string
}

const Form: FC<FormProps> = ({ header, inputs }): JSX.Element => {
  const allInputs = inputs.map((input, index) => {
    return (
      <input
        key={index}
        value={input.property}
        placeholder={input.placeholder}
        onChange={event => input.method(event.target.value)}
        type={input.type ? input.type : 'text'}
        autoComplete='off'
        // required
      />
    )
  })

  return (
    <div className="register-form">
      <h1 className="register-form__header">{header}</h1>
      <div className="register-form__inputs">{allInputs}</div>
    </div>
  )
}

export default Form 