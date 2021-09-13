import React, {useState} from "react";
import {default as axios} from "axios";

function PokemonList({poke}) {

    const [name, setName] = useState("")
    const [sprite, setSprite] = useState("")

    if (poke.hasOwnProperty("url")) {
        axios.get(poke.url)
            .then(function (response) {
                setSprite(response.data.sprites.versions["generation-viii"].icons.front_default)
                setName(response.data.name)
            })
    } else {
        axios.get(poke.pokemon.url)
            .then(function (response) {
                setSprite(response.data.sprites.versions["generation-viii"].icons.front_default)
                setName(response.data.name)
            })
    }

    return (
        <div>
            <img src={sprite} alt={name}/>
            <h5 className={"ability-name fs-6 text-capitalize"}>{name}</h5>
        </div>
    )

}

export default PokemonList