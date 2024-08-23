interface ButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

interface JokeJSON {
    category: string
    error: boolean
    flags: {nsfw: false, religious: false, political: false, racist: false, sexist: false}
    id: number
    joke: string
    lang: string
    safe: boolean
    type: string
}