const JokesFilter = (props: JokesFilter) => {

    if ( props.jokes === undefined) return null;
    const categories: Array<string | undefined> = [];

    console.log(categories);

    for (let i = 0; i < props.jokes.length; i++) {
        var joke: JokeJSON = props.jokes[i];

        if (!categories.includes(joke.category)) {
            categories.push(joke.category);
        };
    }

    return(
        <ul className="flex space-x-4 mt-4">
            {categories !== undefined && categories.map((category: string | undefined, index) => <li key={index} className="p-5 rounded bg-white cursor-pointer">{category}</li>)}
        </ul>
    )
}

export default JokesFilter