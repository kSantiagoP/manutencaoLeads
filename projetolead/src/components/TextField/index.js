import './TextField.css';

const TextField = (props) => {
    return(
        <div className="textField">
            <label>{props.label}</label>
            <input placeholder="" type={props.type}/>
        </div>
    )
}

export default TextField;