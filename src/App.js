import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={!store.getState().token ? Login : () => <Redirect to="/" />} />
          <Route path="" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App