import React, { useState } from 'react'

import NavBar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import LayoutLocalization from '../../components/layoutlocalization'

import { Container } from './styles'

const localization: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar)
  }

  return (
    <Container>
      <NavBar toggleSidebar={toggleSidebar} />
      <div className="layout">
        <Sidebar isOpenSidebar={isOpenSidebar} />
        <LayoutLocalization isOpenSidebar={isOpenSidebar} />
      </div>
    </Container>
  )
}

export default localization
