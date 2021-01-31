import React, { useContext, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import AuthContext from '../../contexts/auth'

import { Container } from './styles'

const register: React.FC = () => {
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputPass = useRef<HTMLInputElement>(null)
  const { signUp } = useContext(AuthContext)

  const history = useHistory()

  // subimit form
  const SubmitForm = async () => {
    const response = await signUp(
      inputEmail?.current?.value,
      inputPass?.current?.value
    )

    if (response !== undefined) {
      // redirecionar
      return history.push('/')
    } else {
      alert('erro ao realizar cadastro')
    }
  }

  const navigate = (url: string) => {
    // redirecionar
    return history.push(url)
  }

  return (
    <Container>
      <div className="container">
        <div className="card card-1">
          <div id="demo" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="form__group field">
                    <input
                      type="email"
                      className="form__field"
                      placeholder="email"
                      name="email"
                      id="email"
                      ref={inputEmail}
                    />
                    <label htmlFor="email" className="form__label">
                      email
                    </label>
                  </div>

                  <div className="form__group field">
                    <input
                      type="password"
                      className="form__field"
                      placeholder="password"
                      name="password"
                      id="password"
                      ref={inputPass}
                    />
                    <label htmlFor="password" className="form__label">
                      password
                    </label>
                  </div>

                  <div className="css-img-button">
                    <div className="col-6 justify-content-right">
                      <img
                        className="img-fluid"
                        src="https://img.icons8.com/plasticine/100/000000/sun.png"
                      />
                    </div>
                    <div>
                      <button onClick={SubmitForm} className="register-btn">
                        Registrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-link">
          <a onClick={() => navigate('/login')}>login</a>
        </div>
      </div>
    </Container>
  )
}

export default register
