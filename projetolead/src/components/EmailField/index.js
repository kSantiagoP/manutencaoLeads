import TextField from "../TextField";

const EmailField = (props) =>{

    return (
        <TextField label={props.label} required={props.required} type="email" name={props.name} disabled={props.disabled} value={props.value}></TextField>
    )
}


export default EmailField;