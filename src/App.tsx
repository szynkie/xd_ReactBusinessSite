import "./App.scss";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Navbar from './components/NavBar/NavBar';
import Profile from "./components/Profile/Profile";
import {Provider} from 'react-redux';
import React from 'react';
import {store} from './store';
import TestPage from './components/TestPage/TestPage';

const routes = [
    {
        exact: true,
        path: "/",
        component: Home
    },
    {
        path: "/profile/:userId",
        component: Profile
    },
    {
    path: "/*",
    component: TestPage
    }
];


function App() {

    return (
        <Provider store={store}>
            <Router>
                <div className="app">
                    <Navbar/>
                    <div className="app-window">
                        <Menu/>
                        <main>
                            <Switch>
                                {routes.map((route, i) => (
                                    <RouteWithSubRoutes key={i} {...route} />
                                ))}
                            </Switch>
                        </main>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

function RouteWithSubRoutes(route: typeof routes[0]) {
    return (
        <Route
            exact={route.exact}
            path={route.path}
            render={(props: any) => (
                <route.component {...props} />
            )}
        />
    );
}

export default App;
