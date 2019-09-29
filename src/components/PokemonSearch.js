import React from 'react'

const PokemonSearch = (props) => {
    const name = props.match.params.name;
   /* TODO:
            - Update the architecture to use redux and have all pokemons infos in a local state
            - map inside the pokemons array and compare the name value with the `props.match.params.url`
            - if found, render the corresponding pokemon with its detailed infos
            -if not found, render a `Not exist` message and a button to go back to the home page

   
   */

    return (
        <div className="pokemonSearch">
            <h3>Recherche de {name}... 
                <span className="btn-floating btn-large pulse"><i className="material-icons">search</i></span>
            </h3>
            {console.log(props.match.params.name)}
        </div>
    )
}

export default PokemonSearch;