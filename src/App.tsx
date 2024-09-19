import React from "react";
import "./App.css";
import JokesList from "./components/JokesList";

function App() {

    return <div className="container mx-auto bg-slate-400 p-5 rounded-xl">
        <JokesList></JokesList>
    </div>;
}

export default App;
