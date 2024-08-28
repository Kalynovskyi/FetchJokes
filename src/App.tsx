import React from "react";
import "./App.css";
import Jokes from "./components/JokesList";

function App() {

    return <div className="container mx-auto bg-slate-400 p-5 rounded-xl">
        <Jokes></Jokes>
    </div>;
}

export default App;
