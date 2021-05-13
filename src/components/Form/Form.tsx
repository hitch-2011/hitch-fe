import React from 'react'

interface FormProps {
  header: string
  inputs: Array<Inputs>
}

interface Inputs {
  property: string
  method: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
}

const Form: React.FC<FormProps> = ({ header, inputs}): JSX.Element => {
  return (
    <div>

    </div>
  )

}

export default Form 