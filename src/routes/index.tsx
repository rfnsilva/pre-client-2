import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './private'

import Login from '../pages/login'
import Register from '../pages/register'
import Dados from '../pages/dados'
import Home from '../pages/home'
import Localization from '../pages/localization'

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/perfil/dados" component={Dados} />
        <PrivateRoute
          exact
          path="/perfil/localization"
          component={Localization}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default routes
