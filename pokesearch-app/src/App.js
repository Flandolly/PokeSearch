import React from "react";
import Home from "./Components/Home";
import {Route} from "react-router-dom";
import Header from "./Components/Header";

function App() {
    return (
        <div>
            <header>
                <Route path={"/"} component={Header}/>
            </header>

            <main>
                <Route path={"/"} exact component={Home}/>
            </main>
        </div>
    );
}

export default App;