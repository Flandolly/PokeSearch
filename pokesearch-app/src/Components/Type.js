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


function Type(props) {

    const [type, setType] = useState({})
    const [image, setImage] = useState("")
    const imageSrcs = [iconDark, iconIce, iconGrass, iconNormal, iconFairy, iconGround, iconDragon, iconFighting, iconRock,
        iconPsychic, iconFire, iconFire, iconWater, iconElectric, iconPoison, iconBug, iconFlying, iconSteel, iconGhost]

    useEffect(() => {
        const searchParams = props.match.url.split("/")
        axios.get(`https://pokeapi.co/api/v2/${searchParams[1]}/${searchParams[2]}/`)
            .then(function (response) {
                const foundImg = imageSrcs.find(img => img.toLowerCase().includes(response.data.name))
                setType(response.data)
                setImage(foundImg)
                console.log(response.data)
            })

    }, [props.match.url])


    return (
        <div className={"container-fluid"}>
            <section className={"main-body d-flex align-items-center flex-column"}>
                <div className={"type-title text-capitalize"}>
                    <h3>{type.name} Type</h3>
                </div>
                <img src={image} alt={"Type Sprite"}/>
            </section>
        </div>
    )
}

export default Type