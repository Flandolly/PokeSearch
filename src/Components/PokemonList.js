import React, {useState} from "react";
import {default as axios} from "axios";
import {Link} from "react-router-dom";

function PokemonList({poke}) {

    const [name, setName] = useState("")
    const [sprite, setSprite] = useState("")

    if (poke.hasOwnProperty("url")) {
        axios.get(poke.url)
            .then(function (response) {
                if (response.data.sprites.versions["generation-viii"].icons.front_default == null && response.data.sprites.versions["generation-vii"].icons.front_default == null) {
                    setSprite("https://cdn2.bulbagarden.net/upload/8/8e/Spr_3r_000.png")
                } else {
                    setSprite(response.data.sprites.versions["generation-viii"].icons.front_default ? response.data.sprites.versions["generation-viii"].icons.front_default : response.data.sprites.versions["generation-vii"].icons.front_default)
                }
                setName(response.data.name)
            })
    } else {
        axios.get(poke.pokemon.url)
            .then(function (response) {
                if (response.data.sprites.versions["generation-viii"].icons.front_default == null && response.data.sprites.versions["generation-vii"].icons.front_default == null) {
                    setSprite("https://cdn2.bulbagarden.net/upload/8/8e/Spr_3r_000.png")
                } else {
                    setSprite(response.data.sprites.versions["generation-viii"].icons.front_default ? response.data.sprites.versions["generation-viii"].icons.front_default : response.data.sprites.versions["generation-vii"].icons.front_default)
                }
                setName(response.data.name)
            })
    }

    return (
        <div className={"pokemons"}>
            <Link to={`/pokemon/${name.toLowerCase().replaceAll(" ", "-")}`}>
                <img src={sprite} alt={name}/>
                <h5 className={"pokemon-name fs-6 text-capitalize"}>{name}</h5>
            </Link>
        </div>
    )

}

export default PokemonList