import React from 'react'
import searchPokemonAction from '../store/reducers/actions/searchPokemonAction';
import { connect } from 'react-redux'

const PokemonDetail = (props) => {
    const name = props.match.params.pokemonName;
    const toFind = props.pokemonsList.find(pokemon => {
        return pokemon.name === name;
    })
    props.searchPokemon(toFind);

    console.log('a afficher ==> ', props.pokemon)
    props.searchPokemon(toFind)
    if (props.pokemon)
    {
        return (
            <div className="pokemonSearch">
                <h2>carte d'identité de {props.pokemon.name} 
                    <span className="btn-floating btn-large pulse"><i className="small material-icons">fingerprint</i></span>
                </h2>
            </div>
         )
    }
    else {
        return (
            <div className="pokemonSearch">
                <h2>
                    Something went wrong (with Redux)!
                </h2>
            </div>)
        }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchPokemon: (toFind) => {
            return  dispatch(searchPokemonAction(toFind))
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        pokemonsList: state.pokemons,
        pokemon: state.searchedPokemon
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(PokemonDetail)