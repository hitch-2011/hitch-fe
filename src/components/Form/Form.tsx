import React from 'react';

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
        type={input.placeholder === 'email' ? 'email' : 'text'}
        // required
      />
    )
  })

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPage(page + 1)
  }

  

  const progress = {
//       background: `linear-gradient(to right, #128fc1
//  ${page * 25}%, #4f2dc7 ${page * 25}%)`
    transform: `scaleX(.${page * 25})`,
    animationName: `progress${page * 25}`
      
  };

  return (
    <form onSubmit={e => handleSubmit(e)} className="register-form">
      <h1 className="register-form__header">{header}</h1>
      <div className="register-form__inputs">{allInputs}</div>
        <div className="register-form__progress">
          <div className='test' style={progress}/>
          <button
          className="register-form__button btn"
          type='submit'
          >Next</button>
        </div>
    </form>
  )
}

export default Form 