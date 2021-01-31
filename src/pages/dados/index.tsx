import React, { useState } from 'react'

import LayoutDados from '../../components/layoutdados'
import NavBar from '../../components/navbar'
import Sidebar from '../../components/sidebar'

import { Container } from './styles'

const dados: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar)
  }

  return (
    <Container>
      <NavBar toggleSidebar={toggleSidebar} />
      <div className="layout">
        <Sidebar isOpenSidebar={isOpenSidebar} />
        <LayoutDados isOpenSidebar={isOpenSidebar} />
      </div>
    </Container>
  )
}

export default dados
