import React from "react";
import Home from "./Components/Home";
import {Route} from "react-router-dom";
import Header from "./Components/Header";
import Pokemon from "./Components/Pokemon";

function App() {
    return (
        <div>
            <header>
                <Route path={"/"} component={Header}/>
            </header>

            <main>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/pokemon/:search"} exact component={Pokemon}/>
            </main>
        </div>
    );
}

export default App;