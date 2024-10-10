import Card from "./UI/Card";

const Joke = (props: JokeProps) => {
    const jokeData: Joke = props.joke;

    let isJokeTwoPart: boolean | undefined = false;

    if (jokeData.type === "twopart") {
        isJokeTwoPart = true;
    }

    return (
        <li>
            <Card>
                <p className="text-xs">{jokeData.category}</p>
                <h4 className="text-xl">
                    {isJokeTwoPart ? (
                        <>
                            {jokeData.setup} <br></br>
                            {jokeData.delivery}
                        </>
                    ) : (
                        <>{jokeData.joke}</>
                    )}
                </h4>
            </Card>
        </li>
    );
};

export default Joke;
