import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login/Login'
import NewOng from './pages/NewOng/NewOng'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true}>
                    <Login></Login>
                </Route>
                <Route path='/signup'>
                    <NewOng></NewOng>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}