import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LoginFrom from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginFrom} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
