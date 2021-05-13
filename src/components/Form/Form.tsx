import React from 'react'

interface FormProps {
  header: string
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  inputs: Array<Inputs>
}

interface Inputs {
  property: string
  method: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
}

const Form: React.FC<FormProps> = ({ header, page, setPage, inputs }): JSX.Element => {
  const allInputs = inputs.map((input, index) => {
    return (
      <input
        key={index}
        value={input.property}
        placeholder={input.placeholder}
        onChange={event => input.method(event.target.value)}
      />
    )
  })

  return (
    <div>
      <h1>{header}</h1>
      {allInputs}
      <button
        onClick={() => setPage(page + 1)}
      >Next</button>
    </div>
  )
}

export default Form 