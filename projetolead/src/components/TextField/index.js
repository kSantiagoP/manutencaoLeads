import './TextField.css';

const TextField = (props) => {

    return(
        <div className="textField">
            <label>{props.label}
                    {props.required && <span className='required-asterisk'>*</span>}
            </label>
            <input placeholder="" type={props.type} name={props.name} disabled={props.disabled} value={props.value} />
        </div>
    )
}

export default TextField;