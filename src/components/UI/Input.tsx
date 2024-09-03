
const Input = (props: InputProps) => {

    return(
        <input type={props.type} placeholder={props.placeholder} id={props.id} className=" p-4 rounded-md "/>
    );
}

export default Input;