import React, {useState} from "react";
import {default as axios} from "axios";
import {Link} from "react-router-dom";

function PokemonList({poke}) {

    const [name, setName] = useState("")
    const [sprite, setSprite] = useState("")

    axios.get(poke.pokemon.url ? poke.pokemon.url : poke.url)
            .then(function (response) {
                setSprite(response.data.sprites.versions["generation-viii"].icons.front_default ? response.data.sprites.versions["generation-viii"].icons.front_default : response.data.sprites.versions["generation-vii"].icons.front_default)
                setName(response.data.name)
            })

    return (
        <div>
            <Link to={`/pokemon/${name.toLowerCase().replaceAll(" ", "-")}`}>
                <img src={sprite} alt={name}/>
                <h5 className={"pokemon-name fs-6 text-capitalize"}>{name}</h5>
            </Link>
        </div>
    )

}

export default PokemonList