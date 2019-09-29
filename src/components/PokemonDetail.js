import React from 'react'
import { connect } from 'react-redux'
import searchPokemonAction from '../store/reducers/actions/searchPokemonAction';

const PokemonDetail = (props) => {
    const name = props.match.params.pokemonName;
    const toFind = props.pokemonsList.find(pokemon => {
        return pokemon.name === name;
    })
    props.searchPokemon(toFind);
    if (props.pokemon)
    {
        return (
            <div className="container pokemonSearch col m6">
               <div className="card z-depth-2">
                    <div className="card-image small waves-effect waves-block waves-light">
                        <span className="badge">{props.pokemon.id}</span>
                        <img className="resposnvide-img " src={props.pokemon.sprites.front_default} alt={props.pokemon.name}/>
                    </div>
                </div>
                <div className="pokemonInfos card z-depth-5 col">
                    <h4> {props.pokemon.name}
                        <span className="btn-floating btn-small pulse">
                            <i className="small material-icons">fingerprint</i>
                        </span>
                    </h4>
                    <div className="row">
                        <div className="col">
                            <span className="description">Name:</span> {props.pokemon.name}
                        </div>
                        <div className="col">
                            <span className="description">type:</span> {props.pokemon.types[0].type.name}
                        </div>
                        <div className="col">
                            <span className="description">weight:</span> {props.pokemon.weight}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <span className="description">Ability 1:</span> {props.pokemon.abilities[0].ability.name}
                        </div>
                        <div className="col">
                            <span className="description">Ability 2:</span> {props.pokemon.abilities[1].ability.name}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="pokemonSearch">
                <h4>
                    Something went wrong (with Redux)!
                </h4>
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