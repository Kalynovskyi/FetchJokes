import { useState } from "react";
import convertJokesObject from "../helperFunctions/convertJokesObject";
import Joke from "./Joke";
import JokeForm from "./JokeForm";
import JokesFilter from "./JokesFilter";

const JokesList = () => {
    const [jokes, setJokes] = useState({});
    const [isJokesShown, setIsJokesShown] = useState(false);
    const [activeCategory, setActiveCategory] = useState('');

    let apiUrl = "https://v2.jokeapi.dev/joke/";

    const handleUrlRequest = (url: string) => {
        apiUrl = apiUrl + url;
    };

    const handleFetchData = () => {
        (async () => {

            try {
                const response = await fetch(apiUrl);
                const data: jokesArray = await response.json();

                setJokes(data);
                setIsJokesShown(true);
            } catch (error) {
                console.log(error);
            }
        })();
    };

    const newJokes = convertJokesObject(jokes);

    const handleCategoryFilter = (category: string) => {
        setActiveCategory(category);
    }

    return (
        <>
            <JokeForm
                onSubmitForm={handleFetchData}
                getUrl={handleUrlRequest}
            ></JokeForm>

            {isJokesShown && <JokesFilter jokes={newJokes} getCategoryFilter={handleCategoryFilter}></JokesFilter>}

            <ul className="jokes-container mt-4 space-y-4">
                {isJokesShown &&
                    newJokes.map((joke: JokeJSON) => (
                        <Joke key={joke.id} joke={joke}></Joke>
                    ))}
            </ul>
        </>
    );
};

export default JokesList;
