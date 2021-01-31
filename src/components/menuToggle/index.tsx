import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import AuthContext from '../../contexts/auth'

import { Container, Icon, CloseIcon, Wrapper, Menu, MenuLink } from './styles'

export interface Props {
  isOpen?: boolean
  toggle?: any
}

const menuToggle: React.FC<Props> = ({ isOpen, toggle }) => {
  const history = useHistory()
  const { signOut } = useContext(AuthContext)

  const signout = async () => {
    await signOut()
    return history.push('/login')
  }

  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <Wrapper>
        <Menu>
          <MenuLink href="#">vagas</MenuLink>
          <MenuLink href="#">testes</MenuLink>
          <MenuLink href="#">perfil</MenuLink>
          <MenuLink onClick={() => signout()}>signOut</MenuLink>
        </Menu>
      </Wrapper>
    </Container>
  )
}
export default menuToggle
