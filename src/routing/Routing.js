import React from 'react'
import routes from './publicRoutes'
import {Route, Redirect} from 'react-router-dom'

const Routing = () => {
  return (
    <>
      {routes.map((route,index)=>(
          <Route key={index} path={route.path} component={route.component} />
      ))}
      <Route exact path='/' render={() => <Redirect to='/issues' />} />
    </>
  )
}

export default Routing
