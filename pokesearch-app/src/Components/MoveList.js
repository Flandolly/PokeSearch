import React, {useState} from "react";
import {default as axios} from "axios";

function MoveList({move}) {

    const [effect, setEffect] = useState("")
    const [name, setName] = useState("")

    axios.get(move.move.url)
        .then(function (response) {
            setEffect(response.data.effect_entries.find(entry => entry.language.name === "en").effect.replace("$effect_chance", response.data.effect_chance))
            setName(response.data.names.find(entry => entry.language.name === "en").name)
            //console.log(response.data)
        })

    console.log(name)

    return (
        <div>
            <h4 className={"fs-6"}>{name}</h4>
            <h5>{effect}</h5>
        </div>
    )

}

export default MoveList