import React, { useEffect, useState, useRef, useContext } from 'react'
import { Form } from '@unform/web'
import { SubmitHandler, FormHandles } from '@unform/core'
import * as Yup from 'yup'

import AuthContext from '../../contexts/auth'

import Input from '../input'

import { Container } from './styles'

interface Props {
  isOpenSidebar: boolean
}

interface IData {
  cep: string
  city: string
  state: string
  number: string
  complement: string
  street: string
  neighborhood: string
}

interface IErrors {
  [index: string]: string
}

const layoutlocalization: React.FC<Props> = ({ isOpenSidebar }) => {
  const { user, updateLocalization } = useContext(AuthContext)
  const [widthSidebarOpen, setWidthSidebarOpen] = useState<boolean>(false)
  const formRef = useRef<FormHandles>(null)

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

  const submitAddressUpdate: SubmitHandler<IData> = async data => {
    try {
      if (formRef.current) {
        formRef.current.setErrors({})
      }

      const schema = Yup.object().shape({
        cep: Yup.number().min(6).required('cep é obrigatorio !'),
        city: Yup.string().min(4).required('cidade é obrigatorio !'),
        state: Yup.string().min(4).required('estado é obrigatorio !'),
        number: Yup.number().required('numero é obrigatorio !'),
        street: Yup.string().min(4).required('rua é obrigatorio !'),
        neighborhood: Yup.string().required('bairro é obrigatorio !')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      // Validation passed
      if (user.id !== undefined) {
        await updateLocalization(data, user.id)
      }
    } catch (err) {
      const validationErrors: IErrors = {}

      if (err instanceof Yup.ValidationError && formRef.current) {
        err.inner.forEach(error => {
          if (error.path !== undefined) {
            validationErrors[error.path] = error.message
          }
        })

        formRef.current.setErrors(validationErrors)
      }
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
            <Form ref={formRef} onSubmit={submitAddressUpdate}>
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
                    <Input
                      name="cep"
                      placehoder="cep"
                      defaultValue={
                        user.address?.cep === null ||
                        user.address?.cep === undefined
                          ? ''
                          : user.address.cep
                      }
                    />
                  </div>
                  <div className="form-element-component">
                    <label className="label">
                      Cidade
                      <strong className="stars">*</strong>
                    </label>
                    <Input
                      name="city"
                      placehoder="nome da cidade"
                      defaultValue={
                        user.address?.city === null ||
                        user.address?.city === undefined
                          ? ''
                          : user.address.city
                      }
                    />
                  </div>
                  <div className="form-element-component">
                    <label className="label">
                      Estado
                      <strong className="stars">*</strong>
                    </label>
                    <Input
                      name="state"
                      placehoder="nome do estado"
                      defaultValue={
                        user.address?.state === null ||
                        user.address?.state === undefined
                          ? ''
                          : user.address.state
                      }
                    />
                  </div>
                  <div className="form-element-component">
                    <label className="label">
                      Bairro
                      <strong className="stars">*</strong>
                    </label>
                    <Input
                      name="neighborhood"
                      placehoder="nome do bairro"
                      defaultValue={
                        user.address?.neighborhood === null ||
                        user.address?.neighborhood === undefined
                          ? ''
                          : user.address.neighborhood
                      }
                    />
                  </div>
                  <div className="form-element-component">
                    <label className="label">
                      Endereço
                      <strong className="stars">*</strong>
                    </label>
                    <Input
                      name="street"
                      placehoder="nome da rua"
                      defaultValue={
                        user.address?.street === null ||
                        user.address?.street === undefined
                          ? ''
                          : user.address.street
                      }
                    />
                  </div>
                  <div className="form-element-component">
                    <label className="label">
                      Numero
                      <strong className="stars">*</strong>
                    </label>
                    <Input
                      name="number"
                      placehoder="nome da casa"
                      defaultValue={
                        user.address?.number === null ||
                        user.address?.number === undefined
                          ? ''
                          : user.address.number
                      }
                    />
                  </div>
                  <div className="form-element-component">
                    <label className="label">Complemento</label>
                    <Input
                      name="complement"
                      placehoder="ponto de referência"
                      defaultValue={
                        user.address?.complement === null ||
                        user.address?.complement === undefined
                          ? ''
                          : user.address.complement
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-12 p-3 d-flex justify-content-center sendButton">
                <button type="submit">Enviar</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default layoutlocalization
