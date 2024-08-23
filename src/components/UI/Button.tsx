

const Button = (props: ButtonProps) => {
    const className = props.className ? props.className : '';
    const buttonType = props.type ? props.type : 'button';
    
    return(
        <button onClick={props.onClick} type={buttonType} className={`bg-gray-800 text-white p-4 rounded-md hover:bg-gray-600 transition-all duration-300  ${className}`}>{props.children}</button>
    );
}

export default Button;