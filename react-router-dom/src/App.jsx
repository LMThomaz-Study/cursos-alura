import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './paginas/Home';
import { Sobre } from './paginas/Sobre';

import './assets/css/base/base.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
