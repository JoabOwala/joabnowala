import React from "react";
import Nav from "./Nav";
import Home from "./Home";


function App() {

    return (
        <div className="app-container"> 
            <div className="nav-column">
            <Nav />
            </div>
            <div className="home-column">
            <Home />
            </div>
        </div>
)
}

export default App;