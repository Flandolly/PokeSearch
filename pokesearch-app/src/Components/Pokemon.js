import React, {useEffect, useState} from "react";

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

    return (
        <div className={"container"}>
            <section className={"main-body"}>
                <div className={"error"}>
                    {/*{!didErrorOccur ? <h1>No results found. Try again.</h1> : null}*/}
                </div>

            </section>
            <section className={"lower-body"}>

            </section>
        </div>
    )
}

export default Pokemon