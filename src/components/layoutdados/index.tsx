import React, { useContext, useState, useRef, useEffect } from 'react'
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
  name: string
  surname: string
  phone: string
  github: string
  behance: string
  linkedin: string
}

interface IErrors {
  [index: string]: string
}

const layoutdados: React.FC<Props> = ({ isOpenSidebar }) => {
  const { user, updateUser, uploadImage, updateEmail } = useContext(AuthContext)
  const formRef = useRef<FormHandles>(null)
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

  function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()

    if (e.target.files && user.id !== undefined) {
      uploadImage(e.target.files[0], user.id)
    }
  }

  const submitEmailUpdate: SubmitHandler<string> = async data => {
    try {
      if (formRef.current) {
        formRef.current.setErrors({})
      }

      const schema = Yup.object().shape({
        email: Yup.string().email().required('email é obrigatorio !')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      // Validation passed
      if (user.id !== undefined) {
        await updateEmail(data, user.id)
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

  const submitUpdateUser: SubmitHandler<IData> = async data => {
    try {
      if (formRef.current) {
        formRef.current.setErrors({})
      }

      const schema = Yup.object().shape({
        name: Yup.string().min(4).required('nome é obrigatorio !'),
        surname: Yup.string().min(4).required('sobrenome é obrigatorio !'),
        phone: Yup.string().min(8).required('telefone é obrigatorio !')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      // Validation passed
      if (user.id !== undefined) {
        await updateUser(data, user.id)
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
            <div className="row">
              <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                <h2 className="">Foto de perfil</h2>
                <p className="">Adicione uma foto em seu perfil</p>
              </div>
              <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                <div className="mx-auto mb-3 text-left">
                  <img
                    className="profile-img"
                    src={
                      user.image === '' || user.image === undefined
                        ? 'https://via.placeholder.com/150'
                        : user.image
                    }
                  />
                </div>
                <div>
                  <div className="input-upload">
                    <label className="input-upload-label" htmlFor="input-file">
                      <span>Carregar foto</span>
                    </label>
                    <input
                      type="file"
                      id="input-file"
                      className="btn btn-primary"
                      onChange={handleChangeImage}
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card alt">
            <Form ref={formRef} onSubmit={submitEmailUpdate}>
              <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                  <h2 className="">Email</h2>
                  <p className="">Você pode alterar seu email</p>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                  <div className="mt-3 mx-auto  mb-3 text-left">
                    <div className="form-element-component">
                      <label className="label">
                        Email
                        <strong className="stars">*</strong>
                      </label>
                      <Input
                        name="email"
                        placehoder="email"
                        defaultValue={
                          user.email === null || user.email === undefined
                            ? ''
                            : user.email
                        }
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    <span>Atualizar email</span>
                  </button>
                </div>
              </div>
            </Form>
          </div>

          <div>
            <Form ref={formRef} onSubmit={submitUpdateUser}>
              <div className="card">
                <div className="row">
                  <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                    <h2 className="">Instruções</h2>
                    <p className="">
                      Preencha seus dados de perfil. Sempre mantenha seu
                      telefone atualizado.
                    </p>
                  </div>
                  <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                    <div className="form-element-component">
                      <label className="label">
                        Nome
                        <strong className="stars">*</strong>
                      </label>
                      <Input
                        name="name"
                        placehoder="Digite seu nome"
                        type="text"
                        defaultValue={
                          user.name === null || user.name === undefined
                            ? ''
                            : user.name
                        }
                      />
                    </div>
                    <div className="form-element-component">
                      <label className="label">
                        Sobrenome
                        <strong className="stars">*</strong>
                      </label>
                      <Input
                        name="surname"
                        placehoder="Digite seu sobrenome"
                        type="text"
                        defaultValue={
                          user.surname === null || user.surname === undefined
                            ? ''
                            : user.surname
                        }
                      />
                    </div>
                    <div className="form-element-component">
                      <label className="label">
                        Telefone
                        <strong className="stars">*</strong>
                      </label>
                      <Input
                        name="phone"
                        placehoder="(00) 00000-0000"
                        type="text"
                        defaultValue={
                          user.phone === null || user.phone === undefined
                            ? ''
                            : user.phone
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="row">
                  <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                    <h2 className="">Links Pessoais</h2>
                    <p className="">
                      Compartilhe seu perfil de outras plataformas aqui.
                    </p>
                  </div>
                  <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                    <div className="form-element-component">
                      <label className="label">Github</label>
                      <Input
                        name="github"
                        placehoder="https://github.com/abcdefghi"
                        type="text"
                        defaultValue={
                          user.github === null || user.github === undefined
                            ? ''
                            : user.github
                        }
                      />
                    </div>
                    <div className="form-element-component">
                      <label className="label">Behance</label>
                      <Input
                        name="behance"
                        placehoder="https://www.behance.net/abcdefghi"
                        type="text"
                        defaultValue={
                          user.behance === null || user.behance === undefined
                            ? ''
                            : user.behance
                        }
                      />
                    </div>
                    <div className="form-element-component">
                      <label className="label">Linkedin</label>
                      <Input
                        name="linkedin"
                        placehoder="https://www.linkedin.com/in/abcdefghi"
                        type="text"
                        defaultValue={
                          user.linkedin === null || user.linkedin === undefined
                            ? ''
                            : user.linkedin
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 p-3 d-flex justify-content-center updateButton">
                <button type="submit">ATUALIZAR</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  )
}
export default layoutdados
