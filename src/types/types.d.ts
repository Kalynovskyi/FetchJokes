interface ButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    className?: string;
}

interface InputProps {
    type: string;
    placeholder?: string;
    value?: number | string;
    id?: string;
    onChange?: React.ChangeEvent<HTMLInputElement>;
}

interface SelectProps {
    children: React.ReactNode;
    multiple?: boolean;
}

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

interface Joke {
    category?: string;
    error?: boolean;
    id?: number;
    joke?: string | undefined;
    setup?: string;
    delivery?: string;
    lang?: string;
    safe?: boolean;
    type?: string;
}

interface JokeProps {
    key: number | undefined;
    joke: Joke;
}

interface JokesData {
    error?: boolean;
    amount?: number;
    jokes?: Array<{}>;
}

interface JokesFilter {
    jokes?: {}[];
    getCategoryFilter: (string) => void;
}

interface FormProps {
    onSubmitForm: () => void;
    getUrl: (string) => void;
}
