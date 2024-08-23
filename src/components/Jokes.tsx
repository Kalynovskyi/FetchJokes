import { useEffect, useState } from "react";
import Button from "./UI/Button";

const Jokes = () => {
    const [jokes, setJokes] = useState('');

    const fetchData = async () => {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any"); 
        const data = await response.json();

        setJokes(JSON.stringify(data));
    }

    const handleFetchData = () => {
        (async () => await fetchData())(); //The fuck that means
    };

    return (
        <>
            <Button onClick={handleFetchData}>Fetch Data</Button>

            <div className="jokes-container">{jokes}</div>
        </>
    );
};

export default Jokes;
