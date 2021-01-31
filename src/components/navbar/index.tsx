import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import AuthContext from '../../contexts/auth'

import MenuToggle from '../menuToggle'
import { Wrapper, Container, Logo, MobileIcon, NavMenu } from './styles'

interface Props {
  toggleSidebar(): void
}

const navbar: React.FC<Props> = ({ toggleSidebar }) => {
  const history = useHistory()
  const [scrollNav, setScrollNav] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isOpenJWT, setIsOpenJWT] = useState<boolean>(false)
  const { signOut } = useContext(AuthContext)

  useEffect(() => {
    window.addEventListener('scroll', changeScrollNav)
  }, [])

  const changeScrollNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const signout = async () => {
    await signOut()
    return history.push('/login')
  }

  return (
    <>
      <MenuToggle isOpen={isOpen} toggle={toggle} />
      <Container scrollNav={scrollNav}>
        <Wrapper>
          <button
            onClick={toggleSidebar}
            className="btn btn-link d-md-none rounded-circle mr-3"
          >
            <FaBars />
          </button>
          <Logo>PreparoVc</Logo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu isOpenJWT={isOpenJWT}>
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-haspopup="true"
              >
                vagas
              </a>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-haspopup="true"
              >
                testes
              </a>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-haspopup="true"
              >
                perfil
              </a>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-haspopup="true"
                onClick={() => signout()}
              >
                signOut
              </a>
            </li>
          </NavMenu>
        </Wrapper>
      </Container>
    </>
  )
}

export default navbar
