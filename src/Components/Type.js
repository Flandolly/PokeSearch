import React, {useEffect, useState} from "react";
import {default as axios} from "axios"
import iconIce from "../Resources/GO_Ice_M.png"
import iconNormal from "../Resources/GO_Normal_M.png"
import iconDark from "../Resources/GO_Dark_M.png"
import iconFairy from "../Resources/GO_Fairy_M.png"
import iconGround from "../Resources/GO_Ground_M.png"
import iconDragon from "../Resources/GO_Dragon_M.png"
import iconFighting from "../Resources/GO_Fighting_M.png"
import iconRock from "../Resources/GO_Rock_M.png"
import iconPsychic from "../Resources/GO_Psychic_M.png"
import iconFire from "../Resources/GO_Fire_M.png"
import iconWater from "../Resources/GO_Water_M.png"
import iconElectric from "../Resources/GO_Electric_M.png"
import iconPoison from "../Resources/GO_Poison_M.png"
import iconBug from "../Resources/GO_Bug_M.png"
import iconFlying from "../Resources/GO_Flying_M.png"
import iconSteel from "../Resources/GO_Steel_M.png"
import iconGhost from "../Resources/GO_Ghost_M.png"
import iconGrass from "../Resources/GO_Grass_M.png"
import PokemonList from "./PokemonList";
import MoveList from "./MoveList";
import {Link} from "react-router-dom";


function Type(props) {

    const [type, setType] = useState({})
    const [image, setImage] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        const imageSrcs = [iconDark, iconIce, iconGrass, iconNormal, iconFairy, iconGround, iconDragon, iconFighting, iconRock,
            iconPsychic, iconFire, iconFire, iconWater, iconElectric, iconPoison, iconBug, iconFlying, iconSteel, iconGhost]
        const searchParams = props.match.url.split("/")
        axios.get(`https://pokeapi.co/api/v2/${searchParams[1]}/${searchParams[2]}/`)
            .then(function (response) {
                const foundImg = imageSrcs.find(img => img.toLowerCase().includes(response.data.name))
                setType(response.data)
                setImage(foundImg)
            })
            .catch(function (error) {
                setError(error)
            })
    }, [props.match.url])


    if (type.pokemon !== undefined) {
        return (
            <div className={"container-fluid"}>
                <section className={"main-body d-flex align-items-center flex-column"}>
                    <div className={"type-title text-capitalize"}>
                        <h3>{type.name} Type</h3>
                    </div>
                </section>
                <div className={"d-flex justify-content-evenly"}>
                    <div className={"type-imgs"}>
                        <img className={"type-img"} src={image} alt={type.name}/>
                    </div>
                    <div className={"pokemon-group d-flex flex-column"}>
                        <h4 className={"pokemon-list-title fs-6 text-center"}>Pokemon With This Type</h4>
                        <div className={"pokemon-list d-flex flex-row flex-wrap"}>
                            {type.pokemon.map((poke, idx) => {
                                return (
                                    <div className={"pokemons text-center"} key={idx}>
                                        <PokemonList poke={poke}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <section className={"lower-body d-flex flex-row justify-content-evenly"}>
                    <div className={"matchups d-flex"}>
                        <div className={"strengths"}>
                            <h4 className={"fs-6"}>Strong To:</h4>
                            {!type.damage_relations.double_damage_to.length ?
                                <h5 className={"text-muted fst-italic text-center"}>None</h5> : type.damage_relations.double_damage_to.map((item, idx) => {
                                    return (
                                        <Link to={`/type/${item.name}`}>
                                            <div className={"type"} key={idx}>
                                                <h5 className={"t-name text-capitalize text-center"}>{item.name}</h5>
                                            </div>
                                        </Link>
                                    )
                                })}
                        </div>
                        <div className={"weaknesses"}>
                            <h4 className={"fs-6 text-center"}>Weak To:</h4>
                            {!type.damage_relations.double_damage_from.length ?
                                <h5 className={"text-muted fst-italic text-center"}>None</h5> : type.damage_relations.double_damage_from.map((item, idx) => {
                                    return (
                                        <Link to={`/type/${item.name}`}>
                                            <div className={"type"} key={idx}>
                                                <h5 className={"t-name text-capitalize text-center"}>{item.name}</h5>
                                            </div>
                                        </Link>
                                    )
                                })}
                        </div>
                        <div className={"immunities"}>
                            <h4 className={"fs-6"}>Immune To:</h4>
                            {!type.damage_relations.no_damage_from.length ?
                                <h5 className={"text-muted fst-italic text-center"}>None</h5> : type.damage_relations.no_damage_from.map((item, idx) => {
                                    return (
                                        <Link to={`/type/${item.name}`}>
                                            <div className={"type"} key={idx}>
                                                <h5 className={"t-name text-capitalize text-center"}>{item.name}</h5>
                                            </div>
                                        </Link>
                                    )
                                })}
                        </div>
                    </div>
                    <div className={"move-list"}>
                        <h4 className={"fs-6 text-center"}>Moves of This Type</h4>
                        <div className={"moves"}>
                            {type.moves.map((move, idx) => {
                                return (
                                    <div className={"move"} key={idx}>
                                        <MoveList move={move}/>
                                    </div>
                                )
                            })}
                        </div>
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
                    <h5>Redirecting back to home in 5 seconds...</h5>
                    {setTimeout(() => {
                        props.history.push("/")
                    }, 5000)}
                </div>
            )
        }
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

export default Type