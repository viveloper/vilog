import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Section from './components/Section'
import Post from './components/Post'
import NotFound from './components/NotFound'
import store from './store'

import Layout from './components/Layout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/section/:sectionName" component={Section} />
            <Route exact path="/section/:sectionName/post/:id" component={Post} />
          </Layout>
          <Route path="" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App