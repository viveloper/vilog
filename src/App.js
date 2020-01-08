import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Section from './components/Section'
import Post from './components/Post'
import Write from './components/Write'
import NotFound from './components/NotFound'
import store from './store'

import Layout from './components/Layout'
import Test from './components/Test'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          {/* -- with Layout */}
          <Route exact path="/" render={props => <Layout><Home {...props} /></Layout>} />
          <Route exact path="/section/:sectionName" render={props => <Layout><Section {...props} /></Layout>} />
          <Route exact path="/section/:sectionName/post/:id" render={props => <Layout><Post {...props} /></Layout>} />
          {/* with Layout -- */}
          <Route exact path="/section/:sectionName/write" component={Write} />
          <Route exact path="/test" component={Test} />
          <Route path="" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App