import React, {useEffect, useState} from "react";
import AbilityList from "./AbilityList.js"

function Pokemon(props) {

    const axios = require("axios").default
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        function getPokemon() {
            const searchParams = props.match.url.split("/")

            axios.get(`https://pokeapi.co/api/v2/${searchParams[1]}/${searchParams[2]}/`)
                .then(function (response) {
                    console.log(response.data)
                    setPokemon(response.data)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
        getPokemon()
    },[axios, props.match.url])

    /*
    Check to prevent data for images being loaded before the API data is finished being fetched.
    Sourced from: https://stackoverflow.com/questions/63281536/react-hooks-how-to-wait-for-the-data-to-be-fetched-before-rendering
     */

    if (pokemon.sprites !== undefined) {
        return (
            <div className={"container-fluid"}>
                <section className={"main-body d-flex align-items-center flex-column"}>
                    <div className={"error"}>

                    </div>

                    <div className={"pokemon-title text-capitalize"}>
                        <h3>{pokemon.name}</h3>
                    </div>
                    <div className={"pokemon-id"}>
                        <h4>No.{pokemon.id}</h4>
                    </div>
                </section>
                <div className={"pokemon-imgs d-flex justify-content-evenly"}>
                    <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>
                    <div className={"stats-chart align-self-center"}>
                        <div className={"container"}>
                            <div className={"row row-cols-2"}>
                                <div className="stat col text-center">{pokemon.stats[0].stat.name.toUpperCase()}</div>
                                <div className="stat col text-center">{pokemon.stats[0].base_stat}</div>
                                <div className="stat col text-center">{pokemon.stats[1].stat.name.toUpperCase()}</div>
                                <div className="stat col text-center">{pokemon.stats[1].base_stat}</div>
                                <div className="stat col text-center">{pokemon.stats[2].stat.name.toUpperCase()}</div>
                                <div className="stat col text-center">{pokemon.stats[2].base_stat}</div>
                                <div className="stat col text-center">{pokemon.stats[3].stat.name.toUpperCase()}</div>
                                <div className="stat col text-center">{pokemon.stats[3].base_stat}</div>
                                <div className="stat col text-center">{pokemon.stats[4].stat.name.toUpperCase()}</div>
                                <div className="stat col text-center">{pokemon.stats[4].base_stat}</div>
                                <div className="stat col text-center">{pokemon.stats[5].stat.name.toUpperCase()}</div>
                                <div className="stat col text-center">{pokemon.stats[5].base_stat}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={"lower-body d-flex"}>
                    <div className={"abilities"}>
                        <h4>Abilities</h4>
                        {pokemon.abilities.map((ability, idx) => {
                            return (
                                <div className={"ability"} key={idx}>
                                    <AbilityList ability={ability}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className={"moves"}>
                        <h4>MoveList</h4>
                        {pokemon.abilities.map((move, idx) => {

                        })}
                    </div>
                </section>
            </div>
        )
    } else {
        return (
            <div className={"container-fluid"}>
                <div className={"main-body d-flex justify-content-center align-items-center"}>
                    <h1>Loading...</h1>
                </div>
            </div>
        )
    }
}

export default Pokemon