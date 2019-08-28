import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/Header'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'
import Home from './routes/Home/Home'
import LiquorList from './components/LiquorList/LiquorList'
import ArticleList from './routes/ArticleList/ArticleList'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import LoginPage from './routes/LoginPage/LoginPage'
import Profile from './routes/Profile/ProfilePage'

class App extends Component {
 

    

  render() {
  return (
    
    <section>
    <Header />
    <main className='App'>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/liquorlist' component={LiquorList} />
    <Route path='/articlelist' component={ArticleList} />
    <Route path={'/login'} component={LoginPage} />
    <Route path={'/profile'} component={Profile} />
    <Route path={'/register'} component={RegistrationPage} />
    <Route component={NotFoundPage} />
    </Switch>
    </main>
    </section>
  )
}
}

export default App;