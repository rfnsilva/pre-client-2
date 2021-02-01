import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { Container } from './styles'

interface IProps {
  name: string
  type?: string
  placehoder?: string
  defaultValue?: string
}

const input: React.FC<IProps> = ({
  name,
  type,
  placehoder,
  defaultValue,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: ref => {
        return ref.value
      },
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <input
        name={name}
        defaultValue={defaultValue}
        ref={inputRef}
        placeholder={placehoder}
        type={type}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </Container>
  )
}

export default input
