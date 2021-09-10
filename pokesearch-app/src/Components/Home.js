import React, {useState} from "react";

function Home() {

    const [inputString, setInputString] = useState("")
    const [searchTerm, setSearchTerm] = useState([])

    function setButtonToActive(event) {
        const buttons = document.querySelectorAll(".pokemon, .type, .move, .ability")

        buttons.forEach((button) => {
            button.classList.remove("active")
        })

        event.currentTarget.classList.add("active")
    }

    function handleChange(input) {
        return setInputString(input.toLowerCase())
    }

    function handleSubmit(event) {
        const searchType = document.querySelector(".active").innerText.toLowerCase()

        event.preventDefault()
        document.getElementById("search-form").reset()
        setSearchTerm([inputString, searchType])
    }

    return (
        <div className={"home-container container-fluid d-flex justify-content-center align-items-center flex-column"}>
            <h1 className={"home-title"}>PokéSearch</h1>
            <div className={"home-button-group container"}>
                <div className={"row"}>
                    <div onClick={(e) => setButtonToActive(e)} className={"col text-center pokemon active"}>Pokemon</div>
                    <div onClick={(e) => setButtonToActive(e)} className={"col text-center type"}>Type</div>
                    <div onClick={(e) => setButtonToActive(e)} className={"col text-center move"}>Move</div>
                    <div onClick={(e) => setButtonToActive(e)} className={"col text-center ability"}>Ability</div>
                </div>
            </div>
            <form id={"search-form"} onSubmit={(e) => {handleSubmit(e)}} className={"search-form input-group mb-3 justify-content-center"}>
                <input type={"text"} className={"form-control-lg"} placeholder={"Enter Name or ID"} value={inputString} onChange={(e) => handleChange(e.target.value)}/>
                <button className={"btn btn-outline-dark"} type={"submit"} id={"submitBtn"}>Search</button>
            </form>
        </div>
    )
}

export default Home