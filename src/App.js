import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import NowPage from './views/NowPage';
import Search from './views/Search';
import PopularPage from './views/PopularPage';
import TopRatedPage from './views/TopRatedPage';
import MovieDetails from './views/MovieDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import MyList from './views/MyList';



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/nowplaying" component={NowPage}/>
        <Route exact path="/popular" component={PopularPage}/>
        <Route exact path="/top-rated" component={TopRatedPage}/>
        <Route exact path="/movie-details/:id" component={MovieDetails}/>
        <Route exact path="/my-list" component={MyList}/>
      </Switch>
      <br></br>
      <Footer/>
    
    </div>
  );
}

export default App;
