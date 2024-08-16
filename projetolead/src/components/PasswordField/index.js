import TextField from "../TextField";
import{Icon} from 'react-icons-kit';
import './PasswordField.css';
import usePasswordFieldController from "../../controllers/PasswordFieldController";

const PasswordField = (props) =>{
    const {type, icon, handleToggle} = usePasswordFieldController();
    
    return(
        <div className="passwordField">
            <TextField label="Senha" type={type}>
            </TextField>
            <span className="icon-container" onClick={handleToggle}>
                    <Icon icon={icon} size={25}/>
            </span>

        </div>
    )
}


export default PasswordField;