import React from 'react'
import  { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import New from './Pages/New/New'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/new" component={New}/>
            </Switch>
        </BrowserRouter>
    )
}