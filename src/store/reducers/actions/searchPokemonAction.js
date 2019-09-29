const searchPokemonAction = (toFind) => {
    return {type: 'SEARCH_POKEMON', payload: toFind}
}

export default searchPokemonAction;