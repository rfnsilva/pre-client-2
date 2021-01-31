import React, { useState } from 'react'

import NavBar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import LayoutHome from '../../components/layouthome'

import { Container } from './styles'

const home: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar)
  }

  return (
    <Container>
      <NavBar toggleSidebar={toggleSidebar} />
      <div className="layout">
        <Sidebar isOpenSidebar={isOpenSidebar} />
        <LayoutHome isOpenSidebar={isOpenSidebar} />
      </div>
    </Container>
  )
}

export default home
