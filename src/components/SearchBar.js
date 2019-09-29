import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemons: this.props.infos,
            searchedPokemon: null,
            searchValue: ''
        }
    }
     handleChange = (e) => {
        e.preventDefault();
        this.setState({
            searchValue: e.target.value
        })
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.props.history.push('/search/' + this.state.searchValue)     
    }
    render(){
        return (
            <div className="searchBar">
                <form className="center-align" name="pokemonSearch" onSubmit={this.handleSearch}>
                    <div className="row">
                        <div className ="col m6">
                            <input 
                                placeholder="Enter a pokemon name..." 
                                name="search" 
                                onChange={this.handleChange}
                                required/>
                        </div>
                        <div className="col" ><button className="btn searchButton">Search</button></div>
                    </div>
                </form>
            </div>
        )
    }
    
}

export default SearchBar;