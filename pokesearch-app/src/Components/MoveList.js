import React, {useState} from "react";
import {default as axios} from "axios";

function MoveList({move}) {

    const [effect, setEffect] = useState("")
    const [name, setName] = useState("")

    if (move.hasOwnProperty("url")) {
        axios.get(move.url)
            .then(function (response) {
                if (response.data.effect_entries.length !== 0) {
                    setEffect(response.data.effect_entries.find(entry => entry.language.name === "en").effect.replace("$effect_chance", response.data.effect_chance))
                } else {
                    setEffect("No description available.")
                }
                setName(response.data.names.find(entry => entry.language.name === "en").name)
            })
    } else {
        axios.get(move.move.url)
            .then(function (response) {
                setEffect(response.data.effect_entries.find(entry => entry.language.name === "en").effect.replace("$effect_chance", response.data.effect_chance))
                setName(response.data.names.find(entry => entry.language.name === "en").name)
                //console.log(response.data)
            })
    }


    return (
        <div>
            <h4 className={"move-name fs-6"}>{name}</h4>
            <h5 className={"move-effect"}>{effect}</h5>
        </div>
    )

}

export default MoveList