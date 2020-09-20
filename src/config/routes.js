import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// To home page
import Home from '../pages/Home'


// To Team pages
import ProductIndex from '../pages/product/productIndex' // good
import ProductShow from '../pages/product/productShow' 
import ProductCreate from '../pages/product/productCreate' // good
import ProductUpdate from '../pages/product/productUpdate' // good


// Authorization
import Login from '../pages/Login' // good
import Profile from '../pages/Profile' // good
import Register from '../pages/Register' // good

export default (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            
            <Route exact path='/product' render={ () => (
                 <ProductIndex 
                 {...props } 
                 />
            ) 
            } />
            <Route  exact path='/product/new' component={ ProductCreate } />
            <Route   path='/product/update/:id' component={ ProductUpdate } />
            <Route   path='/product/:id' render={ (props) => (
                <ProductShow 
                {...props}
                />
            )
            } />

            <Route exact path='/profile' component={ Profile } />
            <Route exact path='/register' component = { Register } />
            <Route exact path='/login' render={ (routeProps ) => {
                return <Login 
                    {...routeProps }
                    storeUser={ props.storeUser }
                />
            }}
            />
            <Route exact path='/logout' component= { Home } />
        </Switch>

    </BrowserRouter>
)
