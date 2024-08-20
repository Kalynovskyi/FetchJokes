

const Button = (props: ButtonProps) => {
    return(
        <button className={` ${props.className}`}>{props.children}</button>
    );
}

export default Button;