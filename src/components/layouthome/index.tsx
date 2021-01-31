import React, { useState, useEffect } from 'react'

import { Container } from './styles'

interface Props {
  isOpenSidebar: boolean
}

const layouthome: React.FC<Props> = ({ isOpenSidebar }) => {
  const [widthSidebarOpen, setWidthSidebarOpen] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('resize', changeWidthSidebar)

    if (window.innerWidth >= 768) {
      setWidthSidebarOpen(true)
    }
  }, [])

  const changeWidthSidebar = () => {
    if (window.innerWidth >= 768) {
      setWidthSidebarOpen(true)
    } else {
      setWidthSidebarOpen(false)
    }
  }

  return (
    <Container
      isOpenSidebar={isOpenSidebar}
      widthSidebarOpen={widthSidebarOpen}
    >
      <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
        <div
          className="row d-flex justify-content-center px-3"
          style={{ margin: '0' }}
        >
          <div className="card">
            <div className="row">
              <div className="col-sm-12 col-lg-12 col-md-12 col-12">
                <h4 style={{ color: '#c93b59' }}>Instruções</h4>
                <hr className="hr-css" />
                <p>
                  Para atualizar suas informações cadastrais, clique na barra
                  vertical em
                </p>

                <ul>
                  <li>
                    <span>
                      <i className="icon fas fa-user-circle"></i>
                      para atualizar seu{' '}
                      <strong>
                        perfil<span className="text-danger">*</span>
                      </strong>{' '}
                      (nome, sobrenome, telefone, links pessoais).
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="icon fas fa-map-marked-alt"></i>
                      para atualizar sua{' '}
                      <strong>
                        localização<span className="text-danger">*</span>
                      </strong>{' '}
                      (CEP, cidade, etc.).
                    </span>
                  </li>
                </ul>
                <p className="font-weight-light font-italic text-secondary">
                  Se sentir falta de algum campo, conte-nos por
                  <a
                    target="_blank"
                    href="#"
                    rel="noreferrer"
                    className="text-success"
                  >
                    <i className=" fab fa-whatsapp"></i>
                    Whatsapp
                  </a>{' '}
                  o que você gostaria de ver por aqui.
                </p>
                <p className="font-weight-light font-italic text-secondary">
                  Se tiver algum problema com preenchimento, alguma dúvida ou
                  sugestão contate-nos também.
                </p>
                <p>
                  <strong className="text-danger">
                    * Campos Obrigatórios para a candidatura em uma vaga.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default layouthome
