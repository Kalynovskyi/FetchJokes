import { useEffect, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import convertJokesObject from "../helperFunctions/convertJokesObject";
import Joke from "./Joke";

const JokesList = () => {
    const [jokes, setJokes] = useState({});
    const [isJokesShown, setIsJokesShown] = useState(false);
    const API_URL = "https://v2.jokeapi.dev/joke/Any?amount=4";

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            const data: jokesArray = await response.json();
    
            setJokes(data);
            setIsJokesShown(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleFetchData = () => {
        (async () => await fetchData())(); //The fuck that means
    };

    const newJokes = convertJokesObject(jokes);

    return (
        <>
            <Input type='number' placeholder="Jokes amount"></Input>
            <Button onClick={handleFetchData}>Fetch Data</Button>

            <ul className="jokes-container mt-4 space-y-4">
                {isJokesShown && newJokes.map((joke: JokeJSON) => (
                    
                    <Joke key={joke.id} joke={joke}></Joke>
                ))}
            </ul>
        </>
    );
};

export default JokesList;
