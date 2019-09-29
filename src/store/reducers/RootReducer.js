import axios from 'axios'



const getInitialState = (nbToPrint) => {
    let initialState = {
        pokemons: [],
        searchedPokemon: null,
    }
    if (nbToPrint === 0)
        return null
    axios.get("https://pokeapi.co/api/v2/pokemon/" + nbToPrint)
            .then(response => {
                initialState.pokemons.push(response.data)
                getInitialState(nbToPrint - 1)
                return initialState;
            })
}

const rootReducer = (state = getInitialState(150), action) => {
    console.log('FROM REDUCER ==>', state)
    return {
        state
    }
}
export default rootReducer;