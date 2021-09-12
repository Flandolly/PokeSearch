import React, {useState} from "react";
import {default as axios} from "axios";

function AbilityList({ability}) {

    const [effect, setEffect] = useState("")
    const [name, setName] = useState("")

    axios.get(ability.ability.url)
        .then(function (response) {
            setEffect(response.data.effect_entries.find(entry => entry.language.name === "en").effect)
            setName(response.data.names.find(entry => entry.language.name === "en").name)
        })

    return (
        <div>
            <h4>{name}</h4>
            <h5>{effect}</h5>
        </div>
    )

}

export default AbilityList