import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import NowPage from './views/NowPage';
import Search from './views/Search';
import PopularPage from './views/PopularPage';
import TopRatedPage from './views/TopRatedPage';


function App() {
  return (
    <div className="App">

      <p>-----Carlos: Aqui no App tem que ficar o Header - pode deletar esta msg----</p>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/nowplaying" component={NowPage}/>
        <Route exact path="/popular" component={PopularPage}/>
        <Route exact path="/top-rated" component={TopRatedPage}/>
      </Switch>

      <p>------Aqui tb no App vai o Footer------</p>

    </div>
  );
}

export default App;
