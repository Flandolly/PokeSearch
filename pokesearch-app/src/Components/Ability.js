import React, {useEffect, useState} from "react";
import {default as axios} from "axios";
import PokemonList from "./PokemonList";

function Ability(props) {
    const [ability, setAbility] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        const searchParams = props.match.url.split("/")

        axios.get(`https://pokeapi.co/api/v2/${searchParams[1]}/${searchParams[2]}/`)
            .then(function (response) {
                setAbility(response.data)
                console.log(response.data)
            })
            .catch(function (error) {
                setError(error)
            })
    }, [props.match.url])

    if (ability.pokemon !== undefined) {
        return (
            <div className={"container-fluid"}>
                <section className={"main-body d-flex align-items-center flex-column"}>
                    <div className={"ability-title text-capitalize"}>
                        <h3>{ability.name.replaceAll("-", " ")}</h3>
                    </div>
                    <div className={"ability-id"}>
                        <h4>No. {ability.id}</h4>
                    </div>
                </section>
                <section className={"middle-body d-flex justify-content-center"}>
                    <div className={"pokemon-group d-flex flex-column align-items-center"}>
                        <h4 className={"pokemon-list-title fs-6 text-center"}>Pokemon That Have Ability</h4>
                        <div className={"pokemon-list d-flex flex-row flex-wrap"}>
                            {ability.pokemon.map((poke, idx) => {
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
                        <h5>{ability.effect_entries.find(entry => entry.language.name === "en").effect}</h5>
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
                    <div className={"loading d-flex justify-content-center align-content-center"}>
                        <h1>Loading...</h1>
                    </div>
                </div>
            )
        }
    }
export default Ability