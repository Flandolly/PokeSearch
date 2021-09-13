import React, {useEffect, useState} from "react";
import {default as axios} from "axios";
import PokemonList from "./PokemonList";

function Move(props) {

    const [move, setMove] = useState({})

    useEffect(() => {
        const searchParams = props.match.url.split("/")
        axios.get(`https://pokeapi.co/api/v2/${searchParams[1]}/${searchParams[2]}/`)
            .then(function (response) {
                setMove(response.data)
                console.log(response.data)
            })
    }, [props.match.url])


    if (move.learned_by_pokemon !== undefined) {
        return (
            <div className={"container-fluid"}>
                <section className={"main-body d-flex align-items-center flex-column"}>
                    <div className={"move-title text-capitalize"}>
                        <h3>{move.name}</h3>
                    </div>
                    <div className={"move-id"}>
                        <h4>No. {move.id}</h4>
                    </div>
                </section>
                <section className={"middle-body"}>
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

export default Move