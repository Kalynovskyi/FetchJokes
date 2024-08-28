interface ButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

interface JokeJSON {
    category?: string,
    error?: boolean,
    id?: number,
    joke?: string | undefined,
    setup?: string,
    delivery?: string,
    lang?: string,
    safe?: boolean,
    type?: string
}

interface jokesJSON {
    key: number | undefined,
    joke: JokeJSON
}

interface jokesArray {
    error?: boolean,
    amount?: number,
    jokes?: Array<{}>
}