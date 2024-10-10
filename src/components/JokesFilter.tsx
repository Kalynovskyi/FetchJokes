const JokesFilter = (props: JokesFilter) => {
    if (props.jokes === undefined) return null;
    const categories: Array<string | undefined> = [];

    for (let i = 0; i < props.jokes.length; i++) {
        var joke: Joke = props.jokes[i];

        if (!categories.includes(joke.category)) {
            categories.push(joke.category);
        }
    }

    const handleCategoryClick = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLInputElement;

        const classes = target.classList;
        classes.toggle("bg-slate-700");
        classes.toggle("text-white");
        classes.toggle("bg-white");

        props.getCategoryFilter(target.dataset.value);
    };

    return (
        <ul className="flex space-x-4 mt-4">
            {categories !== undefined &&
                categories.map((category: string | undefined, index) => (
                    <li
                        key={index}
                        className="p-5 rounded bg-white cursor-pointer"
                        onClick={handleCategoryClick}
                        data-value={category}
                    >
                        {category}
                    </li>
                ))}
        </ul>
    );
};

export default JokesFilter;
