const savePokemonsAction = (pokemonsList) => {
    return {type: 'SAVE_POKEMONS', payload: pokemonsList}
}

export default savePokemonsAction;