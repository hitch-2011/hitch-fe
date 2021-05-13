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
        required
      />
    )
  })

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPage(page + 1)
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <h1>{header}</h1>
      {allInputs}
      <button
        // onClick={() => setPage(page + 1)}
        type='submit'
      >Next</button>
    </form>
  )
}

export default Form 