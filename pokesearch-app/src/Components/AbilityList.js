import React, {useState} from "react";
import {default as axios} from "axios";
import {Link} from "react-router-dom";

function AbilityList({ability}) {

    const [effect, setEffect] = useState("")
    const [name, setName] = useState("")

    axios.get(ability.ability.url)
        .then(function (response) {
            if (response.data.effect_entries.length !== 0) {
                setEffect(response.data.effect_entries.find(entry => entry.language.name === "en").effect)
            } else {
                setEffect("No description available.")
            }
            setName(response.data.names.find(entry => entry.language.name === "en").name)
        })

    return (
        <div>
            <Link to={`/ability/${name.toLowerCase().replaceAll(" ", "-")}`}>
                <h4 className={"ability-name fs-6"}>{name}</h4>
            </Link>
            <h5 className={"ability-effect"}>{effect}</h5>
        </div>
    )

}

export default AbilityList