import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import ImageFeedPage from '../screens/ImageFeedPage/ImageFeedPage'
import AddImagePage from '../screens/AddImagePage/AddImagePage'
import ImageDetailPage from '../screens/ImageDetailPage/ImageDetailPage'
import ErrorPage from '../screens/ErrorPage/ErrorPage'

const Router = () => {
    return (
            <Switch>
                <Route exact path={'/login'}>
                    <LoginPage/>
                </Route>
                <Route exact path={'/signup'}>
                    <SignUpPage/>
                </Route>
                <Route exact path={['/image', '/']}>
                    <ImageFeedPage/>
                </Route>
                <Route exact path={['/image/registry']}>
                    <AddImagePage/>
                </Route>
                <Route exact path={'/image/:id'}>
                    <ImageDetailPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>    
            </Switch>
    )
}

export default Router;