import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "../pages/Home"
import ListCareer from "../pages/ListCareer"

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list-career">
          <ListCareer />
        </Route>
      </Switch>
    </Router>
  )
}
