import React, {useState} from "react";
import {default as axios} from "axios";
import {Link} from "react-router-dom";

function PokemonList({poke}) {

    const [name, setName] = useState("")
    const [sprite, setSprite] = useState("")

    if (poke.hasOwnProperty("url")) {
        axios.get(poke.url)
            .then(function (response) {
                setSprite(response.data.sprites.versions["generation-vii"].icons.front_default)
                setName(response.data.name)
            })
    } else {
        axios.get(poke.pokemon.url)
            .then(function (response) {
                setSprite(response.data.sprites.versions["generation-vii"].icons.front_default)
                setName(response.data.name)
            })
    }

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