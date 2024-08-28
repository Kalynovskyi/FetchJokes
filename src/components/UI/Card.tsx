const Card = (props: CardProps) => {
    const className = props.className ? props.className : 'bg-white';

    return(
        <div className={`card rounded-3xl p-5 ${className}`}>{props.children}</div>
    );
}

export default Card;