// API returns different format if called one joke or several, 
// function convertJokesObject() converts them to one format


const convertJokesObject = (jokes: JokesData) => {

    let convertedJokes = [];

    if (jokes.jokes) {
        convertedJokes = jokes.jokes;
    } else {
        convertedJokes.push(jokes);
    }

    return convertedJokes;
}

export default convertJokesObject