import React, {useState} from "react";
import {default as axios} from "axios";
import {Link} from "react-router-dom";

function MoveList({move}) {

    const [effect, setEffect] = useState("")
    const [name, setName] = useState("")

    if (move.hasOwnProperty("url")) {
        axios.get(move.url)
            .then(function (response) {
                if (response.data.effect_entries.length !== 0) {
                    setEffect(response.data.effect_entries.find(entry => entry.language.name === "en").effect.replaceAll("$effect_chance", response.data.effect_chance))
                } else {
                    setEffect("No description available.")
                }
                setName(response.data.names.find(entry => entry.language.name === "en").name)
            })
    } else {
        axios.get(move.move.url ? move.move.url : move.url)
            .then(function (response) {
                setEffect(response.data.effect_entries.find(entry => entry.language.name === "en").effect.replaceAll("$effect_chance", response.data.effect_chance))
                setName(response.data.names.find(entry => entry.language.name === "en").name)
                //console.log(response.data)
            })
    }

    return (
        <div>
            <Link to={`/move/${name.toLowerCase().replaceAll(" ", "-")}`}>
                <h4 className={"move-name fs-6"}>{name}</h4>
            </Link>
            <h5 className={"move-effect"}>{effect}</h5>
        </div>
    )

}

export default MoveList