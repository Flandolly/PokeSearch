import React, {useEffect, useState} from "react";
import {default as axios} from "axios";
import PokemonList from "./PokemonList";

function Move(props) {

    const [move, setMove] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        const searchParams = props.match.url.split("/")
        axios.get(`https://pokeapi.co/api/v2/${searchParams[1]}/${searchParams[2]}/`)
            .then(function (response) {
                setMove(response.data)
                console.log(response.data)
            })
            .catch(function (error) {
                setError(error)
                console.log(error)
            })
    }, [props.match.url])


    if (move.learned_by_pokemon !== undefined) {
        return (
            <div className={"container-fluid"}>
                <section className={"main-body d-flex align-items-center flex-column"}>
                    <div className={"move-title text-capitalize"}>
                        <h3>{move.name.replaceAll("-", " ")}</h3>
                    </div>
                    <div className={"move-id"}>
                        <h4>No. {move.id}</h4>
                    </div>
                </section>
                <section className={"middle-body d-flex justify-content-evenly align-items-center"}>
                    <div className={"stats-chart move-stats"}>
                        <div className={"container"}>
                            <h4 className={"stats-title text-center fs-6"}>Stats</h4>
                            <div className={"row row-cols-2"}>
                                <div className={"stat col text-center"}>Category:</div>
                                <div className={"stat col text-center text-capitalize"}>{move.damage_class.name}</div>
                                <div className={"stat col text-center"}>Power:</div>
                                <div className={"stat col text-center"}>{move.power !== null ? move.power : "N/A"}</div>
                                <div className={"stat col text-center"}>PP:</div>
                                <div className={"stat col text-center"}>{move.pp}</div>
                            </div>
                        </div>
                    </div>
                    <div className={"pokemon-group d-flex flex-column align-items-center"}>
                        <h4 className={"pokemon-list-title fs-6 text-center"}>Pokemon That Can Learn Move</h4>
                        <div className={"pokemon-list d-flex flex-row flex-wrap"}>
                            {move.learned_by_pokemon.map((poke, idx) => {
                                return (
                                    <div className={"pokemons text-center"} key={idx}>
                                        <PokemonList poke={poke}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section className={"lower-body d-flex flex-column align-items-center"}>
                    <div className={"desc-title"}>
                        <h4 className={"fs-5 text-center"}>Description</h4>
                    </div>
                    <div className={"description"}>
                        <h5>{move.effect_entries.find(entry => entry.language.name === "en").effect.replaceAll("$effect_chance", move.effect_chance)}</h5>
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

export default Move