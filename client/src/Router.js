import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";

function Router() {
    return
    <BrowserRouter>
        <Switch>
            <Route path="/">
                <div>
                    Home
                </div>
            </Route>
            <Route path="/register">
                <div>
                    REGISTER
                </div>
            </Route>
            <Route path="/login">
                <div>
                    LOGIN
                </div>
            </Route>
        </Switch>
    </BrowserRouter>
}

export default Router;