import React, { Fragment, Suspense } from 'react'
import { hot } from 'react-hot-loader/root'
import login from './pages/login'
import home from './pages/home'
import { Provider } from 'react-redux'
import course from './pages/couresRedux'
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Fragment>
                    <Router>
                        <Suspense fallback={<div>loading</div>}>
                            <Switch>
                                <Route path="/redux" component={course}></Route>
                                <Route path="/login" component={login}></Route>
                                <Route path="/home" component={home}></Route>
                                <Route path="/" exact component={course}></Route>
                            </Switch>
                        </Suspense>
                    </Router>
                </Fragment>
            </Provider>
        </React.StrictMode>
    )
}

export default hot(App)
