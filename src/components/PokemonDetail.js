import React from 'react'
import { connect } from 'react-redux'

const PokemonDetail = (props) => {
    console.log(props.pokemonsList)
    return (
        <div className="pokemonSearch">
            <h2>carte d'identité de {props.match.params.pokemonName}
                <span className="btn-floating btn-large pulse"><i className="small material-icons">fingerprint</i></span>
            </h2>
            {}
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        pokemonsList: state.pokemons,
    }
}
export default connect (mapStateToProps, null)(PokemonDetail)