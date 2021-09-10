import React from "react";

function Home() {

    return (
        <div className={"home-container container-fluid d-flex justify-content-center align-items-center flex-column"}>
            <h1 className={"home-title"}>PokéSearch</h1>
            <div className={"home-button-group container"}>
                <div className={"row"}>
                    <div className={"col text-center pokemon"}>Pokémon</div>
                    <div className={"col text-center type"}>Type</div>
                    <div className={"col text-center move"}>Move</div>
                    <div className={"col text-center ability"}>Ability</div>
                </div>
            </div>
        </div>
    )
}

export default Home