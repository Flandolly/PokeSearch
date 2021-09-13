import React from "react";
import Home from "./Components/Home";
import {Route} from "react-router-dom";
import Header from "./Components/Header";
import Pokemon from "./Components/Pokemon";
import Type from "./Components/Type";

function App() {
    return (
        <div>
            <header>
                <Route path={"/"} component={Header}/>
            </header>

            <main>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/pokemon/:search"} exact component={Pokemon}/>
                <Route path={"/type/:search"} exact component={Type}/>
            </main>
        </div>
    );
}

export default App;