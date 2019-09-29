import axios from 'axios';
import Pokemon from './Pokemon';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import SavePokemonAction from '../store/reducers/actions/savePokemons_actions';

class Pokedex extends Component {

    constructor(props){
        super(props);
        this.getPokemonsInfos(this.props.nbPokemons);
    }

    getPokemonsInfos = (nbToPrint) => {
        if (nbToPrint === 0)
            return null
        axios.get("https://pokeapi.co/api/v2/pokemon/" + nbToPrint)
                    .then(response => {
                        this.props.savePokemons(response.data);
                        /*this.setState(prevState => {
                            return {
                                pokemons: [...prevState.pokemons, response.data]
                            }
                        })*/
                        this.getPokemonsInfos(nbToPrint - 1)
                    })
                    
    }
   /* componentDidMount() {
        this.getPokemonsInfos(this.props.nbPokemons);
    }*/
    render(){
        if (this.props.pokemons.length !== this.props.nbPokemons)
            return (
                <div className="row center-align">
                    <h2>Chargement ... 
                        <span className="btn-floating btn-large pulse"><i className="large material-icons">sync</i></span>
                    </h2>

                </div>
            )
        if (this.props.pokemons.length === 0)
            return <div className="center-align"><h2>NO POKEMONS TO SHOW :-( </h2></div>
        return(
            <div>
                <SearchBar history={this.props.history} infos={this.props.pokemons}/>
                <div className="Pokedex">
                    {this.props.pokemons.reverse().map(pokem => {
                        return (
                            <div key={pokem.id} className="pokemonCard">
                                 <Pokemon key={pokem.name} infos={pokem}/>
                            </div>
                    )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        savePokemons: (pokemonsList) => {
            return dispatch(SavePokemonAction(pokemonsList))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);