const initialState = {
        pokemons: [],
        searchedPokemon: null,
    }

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SAVE_POKEMONS':
            return {
                ...state,
                pokemons:[...state.pokemons, action.payload]
            }
        case 'SEARCH_POKEMON':
            console.log("SERACHING........!!!!")
            return {
                ...state,
                searchedPokemon: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;