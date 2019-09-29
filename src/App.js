import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import Pokedex from './components/Pokedex';
import PokemonSearch from './components/PokemonSearch'
import PokemonDetail from './components/PokemonDetail'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="navBar"><h3><a href="/">POKEDEX</a></h3></nav>

    <div className="container mainApp">

    <Router>
      <Switch>
        <Route 
              exact path="/" 
              render={(props) => <Pokedex {...props} nbPokemons={150}/>
        }/>
        <Route 
              path="/search/:name" 
              render = {(props) => <PokemonSearch {...props} />
        }/>
        <Route 
              path="/pokemon/:pokemonName" 
              render = {(props) => <PokemonDetail {...props} />
        }/>
      </Switch>
      
    </Router>
    </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    pokemonsList: state.pokemons
  }
}

export default connect(mapStateToProps)(App);
