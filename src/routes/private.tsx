import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const storage: string = JSON.parse(localStorage.getItem('token') || '{}')
  let signed: boolean

  if (storage.length === undefined) {
    signed = true
  } else {
    signed = false
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (signed) {
          return <Redirect to={{ pathname: '/login' }} />
        }

        return <Component {...props} />
      }}
    />
  )
}

export default PrivateRoute
