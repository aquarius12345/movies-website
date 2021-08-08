import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';


function App() {
  return (
    <div className="App">

      <p>Carlos: Aqui no App tem que ficar o Header - pode deletar esta msg</p>

      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>

    </div>
  );
}

export default App;
