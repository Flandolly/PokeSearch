import React from "react";
import Home from "./Components/Home";
import {Route} from "react-router-dom";
import Header from "./Components/Header";
import Pokemon from "./Components/Pokemon";
import Type from "./Components/Type";
import Move from "./Components/Move";
import Ability from "./Components/Ability";
import About from "./Components/About";

function App() {
    return (
        <div>
            <header>
                <Route path={"/"} component={Header}/>
                <Route path={"/about"} exact component={About}/>
            </header>

            <main>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/pokemon/:search"} exact component={Pokemon}/>
                <Route path={"/type/:search"} exact component={Type}/>
                <Route path={"/move/:search"} exact component={Move}/>
                <Route path={"/ability/:search"} exact component={Ability}/>
            </main>
        </div>
    );
}

export default App;