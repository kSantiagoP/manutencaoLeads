import { useState } from "react";
import {eyeOff} from 'react-icons-kit/feather';
import {eye} from 'react-icons-kit/feather';


const usePasswordFieldController = () =>{
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const handleToggle = () => {
        if (type==='password'){
           setIcon(eye);
           setType('text')
        } else {
           setIcon(eyeOff)
           setType('password')
        }
     }

     return{
        icon,
        type,
        handleToggle
    }
}

export default usePasswordFieldController;
