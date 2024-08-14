import './TextField.css';

const TextField = (props) => {
    return(
        <div className="textField">
            <label>{props.label}</label>
            <input placeholder=""/>
        </div>
    )
}

export default TextField;