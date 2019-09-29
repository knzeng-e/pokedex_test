import React from 'react';

const Pokemon = ({infos}) => {
    const pokemonDetail = `/pokemon/${infos.name}`
    return (
        <div className="card hoverable z-depth-5">
            <a href={pokemonDetail}>
            <div className="card-image waves-effect waves-block waves-light">
            <span className="badge">{infos.id}</span>
                <img className="activator resposnvide-img " src={infos.sprites.front_default} alt={infos.name}/>
            </div>
            <div className="card-content center-align">
              <span className="card-title activator grey-text text-darken-4">{infos.name}</span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                    {infos.name}<i className="material-icons right">close</i>
                </span>
                <div className="pokemonInfos">
                    <span>Name: {infos.name}</span>
                    <span>type: {infos.types[0].type.name}</span>
                    <span>weight: {infos.weight}</span>
                </div>
            </div>
            </a>
        </div>
    )
}

export default Pokemon;