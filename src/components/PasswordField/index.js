import TextField from "../TextField";
import{Icon} from 'react-icons-kit';
import './PasswordField.css';
import usePasswordFieldVisibilityController from "../../controllers/PasswordFieldController";

const PasswordField = (props) =>{
    const {type, icon, handleToggle} = usePasswordFieldVisibilityController();
    
    return(
        <div className="textField">
            <TextField label={props.label} required={props.required} type={type} name={props.name}>
            </TextField>
            <span className="icon-container" onClick={handleToggle}>
                    <Icon icon={icon} size={25}/>
            </span>

        </div>
    )
}


export default PasswordField;