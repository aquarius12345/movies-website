import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Search from './views/Search';


function App() {
  return (
    <div className="App">

      <p>-----Carlos: Aqui no App tem que ficar o Header - pode deletar esta msg----</p>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
      </Switch>

      <p>------Aqui tb no App vai o Footer------</p>

    </div>
  );
}

export default App;
