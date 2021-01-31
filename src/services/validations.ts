export const validadName = (name: string) => {
  const errors = { nameError: '' }

  switch (true) {
    case !name:
      errors.nameError = 'nome obrigatorio para candidatar a vagas'
      break
    default:
      errors.nameError = ''
      break
  }

  return errors
}

export const validadSurname = (surname: string) => {
  const errors = { surnameError: '' }

  switch (true) {
    case !surname:
      errors.surnameError = 'sobrenome obrigatorio para candidatar a vagas'
      break
    default:
      errors.surnameError = ''
      break
  }

  return errors
}

export const validadEmail = (email: string) => {
  const errors = { emailError: '' }

  switch (true) {
    case !email:
      errors.emailError = 'email obrigatorio'
      break
    case !email.match(/^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i):
      errors.emailError = 'email mal formatado(ex@ex.com)'
      break
    default:
      errors.emailError = ''
      break
  }

  return errors
}

export const validadPhone = (phone: string) => {
  const errors = { phoneError: '' }

  switch (true) {
    case !phone:
      errors.phoneError = 'phone obrigatorio para candidatar a vagas'
      break
    case !phone.match(/^([0-9]{2})([0-9]{4,5})([0-9]{4})$/):
      errors.phoneError = 'phone mal formatado(73999025453)'
      break
    default:
      errors.phoneError = ''
      break
  }

  return errors
}

export const validadPassword = (password: string) => {
  const errors = { passError: '' }

  switch (true) {
    case !password:
      errors.passError = 'senha obrigatoria'
      break
    case password.length <= 5:
      errors.passError = 'minimo de 6 caracteres'
      break
    default:
      errors.passError = ''
      break
  }

  return errors
}
