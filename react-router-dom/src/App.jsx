import { Home } from './paginas/Home';
import { Sobre } from './paginas/Sobre';

import './assets/css/base/base.css';

function App() {
  const Router = () => {
    const location = window.location.pathname;

    if (location === '/sobre') return <Sobre />;

    return <Home />;
  };

  return <> {Router()} </>;
}

export default App;
