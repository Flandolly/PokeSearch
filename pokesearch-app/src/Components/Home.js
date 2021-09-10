import React from "react";

function Home() {

    function setButtonToActive(event) {
        const buttons = document.querySelectorAll(".pokemon, .type, .move, .ability")

        buttons.forEach((button) => {
            button.classList.remove("active")
        })

        event.currentTarget.classList.add("active")
    }

    return (
        <div className={"home-container container-fluid d-flex justify-content-center align-items-center flex-column"}>
            <h1 className={"home-title"}>PokéSearch</h1>
            <div className={"home-button-group container"}>
                <div className={"row"}>
                    <div onClick={(e) => setButtonToActive(e)} className={"col text-center pokemon active"}>Pokémon</div>
                    <div onClick={(e) => setButtonToActive(e)} className={"col text-center type"}>Type</div>
                    <div onClick={(e) => setButtonToActive(e)} className={"col text-center move"}>Move</div>
                    <div onClick={(e) => setButtonToActive(e)} className={"col text-center ability"}>Ability</div>
                </div>
            </div>
            <form className={"search-form input-group mb-3 justify-content-center"}>
                <input type={"text"} className={"form-control-lg"} placeholder={"Enter Name or ID"}/>
                <button className={"btn btn-outline-dark"} type={"submit"} id={"submitBtn"}>Search</button>
            </form>
        </div>
    )
}

export default Home