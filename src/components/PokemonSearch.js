import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import searchPokemonAction from '../store/reducers/actions/searchPokemonAction'

const PokemonSearch = (props) => {
    const name = props.match.params.name;
    const pokemonsList = props.pokemons;
    const pokemonDetails = `/pokemon/${name}`;
    console.log(pokemonsList)

    const toFind = pokemonsList.find(pokemon => {
        return pokemon.name === name;
    })
    if (toFind) {
        props.searchPokemon(toFind);
        return (
            <div>
                <Route path={pokemonDetails}>
                    <Redirect to={pokemonDetails}/>
                </Route>
                {props.history.push('/pokemon/' + name)}
            </div>
        )
    }
    else
    {
        console.log("This pokemon does not exist !")
        return(
            <div className = "notFound">
                <h2> {name} n'existe pas dans la liste </h2>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchPokemon: (toFind) => {
            return  dispatch(searchPokemonAction(toFind))
        }
    }
}

const mapStateToProps = (state, ownsProps) => {
    return {
        pokemons: state.pokemons
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSearch);