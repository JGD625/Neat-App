import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/Header'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'
import Home from './routes/Home/Home'
import LiquorList from './components/LiquorList/LiquorList'
import ArticleList from './routes/ArticleList/ArticleList'



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
    <Route component={NotFoundPage} />
    </Switch>
    </main>
    </section>
  )
}
}

export default App;