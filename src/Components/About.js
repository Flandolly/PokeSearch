import React from "react";

function About() {
    return (
        <div className={"about container-fluid"}>
            <h4 className={"text-center"}>Welcome to PokeSearch!</h4>
            <p className={"text-center"}>PokeSearch is a Pokemon lookup tool utilizing PokeAPI. The purpose of this app to be a one-stop
            shop for all your Pokemon-related inquiries. You can read up on details about specific Pokemon,
            their movesets and individual moves, their abilities and so much more! Just head to the home page,
            choose what type of search you want to conduct, and search away!</p>
            <p className={"text-center"}><em>Note: Your search terms currently need to be exact, and some pokemon need specific terms
            to reach the right page. e.g. Minior = "minior red"; Urshifu = "urshifu single strike"</em></p>
        </div>
    )
}

export default About