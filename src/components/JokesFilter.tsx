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

        if (target.dataset.isActive === 'false') {
            target.dataset.isActive = 'true'
        } else if (target.dataset.isActive === 'true') {
            target.dataset.isActive = 'false'
        }

        const classes = target.classList;
        classes.toggle("bg-slate-700");
        classes.toggle("text-white");
        classes.toggle("bg-white");

        props.getCategoryFilter({category: target.dataset.value, isActive: target.dataset.isActive});
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
                        data-is-active={false}
                    >
                        {category}
                    </li>
                ))}
        </ul>
    );
};

export default JokesFilter;
