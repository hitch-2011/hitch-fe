import React, { Dispatch, FC, SetStateAction, FormEvent} from 'react';

interface FormProps {
  header: string
  page: number
  setPage: Dispatch<SetStateAction<number>>
  inputs: Array<Inputs>
}

interface Inputs {
  property: string
  method: Dispatch<SetStateAction<string>>
  placeholder: string
}

const Form: FC<FormProps> = ({ header, page, setPage, inputs }): JSX.Element => {
  const allInputs = inputs.map((input, index) => {
    return (
      <input
        key={index}
        value={input.property}
        placeholder={input.placeholder}
        onChange={event => input.method(event.target.value)}
        type={input.placeholder === 'Email' ? 'email' : 'text'}
        required
      />
    )
  })

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPage(page + 1)
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className="register-form">
      <h1 className="register-form__header">{header}</h1>
      <div className="register-form__inputs">{allInputs}</div>
    </form>
  )
}

export default Form 