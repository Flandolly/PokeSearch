import React, {useEffect, useState} from "react";
import AbilityList from "./AbilityList.js"
import MoveList from "./MoveList";
import {Link} from "react-router-dom";

function Pokemon(props) {

    const axios = require("axios").default
    const [pokemon, setPokemon] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        const searchParams = props.match.url.split("/")

        axios.get(`https://pokeapi.co/api/v2/${searchParams[1]}/${searchParams[2]}/`)
            .then(function (response) {
                setPokemon(response.data)
                console.log(response.data)
            })
            .catch(function (error) {
                setError(error)
                console.log(error)
            })
    }, [axios, props.match.url])

    /*
    Check to prevent data for images being loaded before the API data is finished being fetched.
    Sourced from: https://stackoverflow.com/questions/63281536/react-hooks-how-to-wait-for-the-data-to-be-fetched-before-rendering
     */

    if (pokemon.sprites !== undefined) {
        return (
            <div className={"container-fluid"}>
                <section className={"main-body d-flex align-items-center flex-column"}>
                    <div className={"pokemon-title text-capitalize"}>
                        <h3>{pokemon.name}</h3>
                    </div>
                    <div className={"pokemon-id"}>
                        <h4>No.{pokemon.id}</h4>
                    </div>
                    <div className={"pokemon-types d-flex"}>
                        {pokemon.types.map((type, idx) => {
                            return (
                                <Link to={`/type/${type.type.name}`}>
                                    <div className={"p-type text-capitalize"} key={idx}>
                                        <h4>{type.type.name}</h4>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </section>
                <div className={"pokemon-imgs d-flex justify-content-evenly"}>
                    <img
                        src={pokemon.sprites.other["official-artwork"].front_default !== null ?
                            pokemon.sprites.other["official-artwork"].front_default :
                            pokemon.sprites.front_default}
                        alt={pokemon.name}/>
                    <div className={"stats-chart align-self-center"}>
                        <div className={"container"}>
                            <h4 className={"text-center fs-6"}>Stats</h4>
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
                <div className={"list-titles d-flex justify-content-around"}>
                    <h4>Abilities</h4>
                    <h4>Moves</h4>
                </div>
                <section className={"lower-body d-flex"}>
                    <div className={"abilities"}>

                        {pokemon.abilities.map((ability, idx) => {
                            return (
                                <div className={"ability"} key={idx}>
                                    <AbilityList ability={ability}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className={"moves"}>
                        {pokemon.moves.map((move, idx) => {
                            return (
                                <div className={"move"} key={idx}>
                                    <MoveList move={move}/>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        )
    } else if (error.length !== 0) {
        if (error.toString().includes("404")) {
            return (
                <div className={"error text-center"}>
                    <h1 className={"error-title"}>404</h1>
                    <h4>Uh Oh! This page doesn't exist!</h4>
                    <h5>Double-check spelling and try again.</h5>
                    {setTimeout(() => {
                        props.history.push("/")
                    }, 5000)}
                </div>
            )
        }
    } else {
        return (
            <div className={"container-fluid"}>
                <div className={"loading d-flex justify-content-center align-items-center"}>
                    <h1>Loading...</h1>
                </div>
            </div>
        )
    }
}

export default Pokemon