import React, { useEffect, useState, useRef, useContext } from 'react'

import AuthContext from '../../contexts/auth'

import { Container } from './styles'

interface Props {
  isOpenSidebar: boolean
}

const layoutlocalization: React.FC<Props> = ({ isOpenSidebar }) => {
  const { user } = useContext(AuthContext)
  const [widthSidebarOpen, setWidthSidebarOpen] = useState<boolean>(false)
  const inputCEP = useRef<HTMLInputElement>(null)
  const inputCity = useRef<HTMLInputElement>(null)
  const inputState = useRef<HTMLInputElement>(null)
  const inputComplement = useRef<HTMLInputElement>(null)
  const inputNeighborhood = useRef<HTMLInputElement>(null)
  const inputNumber = useRef<HTMLInputElement>(null)
  const inputStreet = useRef<HTMLInputElement>(null)

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

  const submitAddressUpdate = async () => {
    if (
      user.id !== undefined &&
      inputCEP.current &&
      inputCity.current &&
      inputState.current &&
      inputComplement.current &&
      inputNeighborhood.current &&
      inputNumber.current &&
      inputStreet.current
    ) {
      const userAddressUpdate = {
        cep: inputCEP.current.value,
        city: inputCity.current.value,
        state: inputState.current.value,
        complement: inputComplement.current.value,
        neighborhood: inputNeighborhood.current.value,
        number: inputNumber.current.value,
        street: inputStreet.current.value
      }

      // await updateLocalization(userAddressUpdate, user.id)
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
              <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                <h2 style={{ color: '#c93b59' }}>Instruções</h2>
                <p>
                  Preencha seus dados de Localização. Sempre os mantenha
                  atualizado.
                </p>
              </div>
              <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                <div className="form-element-component">
                  <label className="label">
                    CEP
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="cep"
                    type="text"
                    name="cep"
                    defaultValue={
                      user.address?.cep === null ||
                      user.address?.cep === undefined
                        ? ''
                        : user.address?.cep
                    }
                    ref={inputCEP}
                  />
                </div>
                {/* <div className="error">{error.nameError}</div> */}
                <div className="form-element-component">
                  <label className="label">
                    Cidade
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="nome da cidade"
                    type="text"
                    name="city"
                    defaultValue={
                      user.address?.city === null ||
                      user.address?.city === undefined
                        ? ''
                        : user.address?.city
                    }
                    ref={inputCity}
                  />
                </div>
                {/* <div className="error">{error.surnameError}</div> */}
                <div className="form-element-component">
                  <label className="label">
                    Estado
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="nome do estado"
                    type="text"
                    name="state"
                    defaultValue={
                      user.address?.state === null ||
                      user.address?.state === undefined
                        ? ''
                        : user.address?.state
                    }
                    ref={inputState}
                  />
                </div>
                {/* <div className="error">{error.phoneError}</div> */}
                <div className="form-element-component">
                  <label className="label">
                    Bairro
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="nome do bairro"
                    type="text"
                    name="neighborhood"
                    defaultValue={
                      user.address?.neighborhood === null ||
                      user.address?.neighborhood === undefined
                        ? ''
                        : user.address?.neighborhood
                    }
                    ref={inputNeighborhood}
                  />
                </div>
                {/* <div className="error">{error.phoneError}</div> */}
                <div className="form-element-component">
                  <label className="label">
                    Endereço
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="nome da rua"
                    type="text"
                    name="street"
                    defaultValue={
                      user.address?.street === null ||
                      user.address?.street === undefined
                        ? ''
                        : user.address?.street
                    }
                    ref={inputStreet}
                  />
                </div>
                {/* <div className="error">{error.phoneError}</div> */}
                <div className="form-element-component">
                  <label className="label">
                    Numero
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="numero da casa"
                    type="text"
                    name="number"
                    defaultValue={
                      user.address?.number === null ||
                      user.address?.number === undefined
                        ? ''
                        : user.address?.number
                    }
                    ref={inputNumber}
                  />
                </div>
                {/* <div className="error">{error.phoneError}</div> */}
                <div className="form-element-component">
                  <label className="label">Complemento</label>
                  <input
                    className="input"
                    placeholder="pontos de referência"
                    type="text"
                    name="complement"
                    defaultValue={
                      user.address?.complement === null ||
                      user.address?.complement === undefined
                        ? ''
                        : user.address?.complement
                    }
                    ref={inputComplement}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-10 p-3 d-flex justify-content-center sendButton">
            <button type="button" onClick={submitAddressUpdate}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default layoutlocalization
