import { useEffect, useState } from "react";
import convertJokesObject from "../helperFunctions/convertJokesObject";
import Joke from "./Joke";
import JokeForm from "./JokeForm";
import JokesFilter from "./JokesFilter";

const JokesList = () => {
    const [jokes, setJokes] = useState(Array<{}>);
    const [filteredJokes, setFilteredJokes] = useState(Array<{}>);
    const [isJokesShown, setIsJokesShown] = useState(false);

    let apiUrl = "https://v2.jokeapi.dev/joke/";

    const handleUrlRequest = (url: string) => {
        apiUrl = apiUrl + url;
    };

    const handleFetchData = () => {
        (async () => {
            try {
                const response = await fetch(apiUrl);
                const data: JokesData = await response.json();

                setJokes(convertJokesObject(data));

                setIsJokesShown(true);
            } catch (error) {
                console.log(error);
            }
        })();
    };

    useEffect(() => {
        setFilteredJokes(jokes);
    }, [jokes]);

    const handleCategoryFilter = (category: {
        category: string;
        isActive: string;
    }) => {
        if (category.isActive === "false") {
            setJokes([...jokes]);
            return;
        }

        const categorizedJokes = jokes.filter((joke: Joke) => {
            return joke.category === category.category;
        });

        setFilteredJokes([...categorizedJokes]);
    };

    return (
        <>
            <JokeForm
                onSubmitForm={handleFetchData}
                getUrl={handleUrlRequest}
            ></JokeForm>

            {isJokesShown && (
                <JokesFilter
                    jokes={jokes}
                    getCategoryFilter={handleCategoryFilter}
                ></JokesFilter>
            )}

            <ul className="jokes-container mt-4 space-y-4">
                {isJokesShown &&
                    filteredJokes.map((joke: Joke) => (
                        <Joke key={joke.id} joke={joke}></Joke>
                    ))}
            </ul>
        </>
    );
};

export default JokesList;
