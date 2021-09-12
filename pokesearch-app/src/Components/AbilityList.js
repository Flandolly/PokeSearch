import React, {useEffect, useState} from "react";

function AbilityList({ability}) {

    const axios = require("axios").default
    let abilityList = ""

    function getAbilities(ability) {
        axios.get(ability.ability.url)
            .then(function (response) {
                abilityList = response.data.effect_entries[1].effect
                console.log(abilityList)
            })
            .then(function () {
                console.log("Function executed")
            })

    }

    return (
        <div>{getAbilities(ability)}</div>
    )

}

export default AbilityList