import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

function LeadPage(){
    function handleClick(){
        alert("TÁ NA DISNEY, PORRA?");
    }
    return(
        <div>
            <Logo></Logo>
            <Link to='/login'>
                <img src="https://i.pinimg.com/474x/ed/73/7f/ed737fcd3105543f05d91aefb65553fa.jpg"/>
            </Link>
            <Button color="#2798BA" handleClick={handleClick} centralize={true}>+ Novo Lead</Button>

        </div>

    )
}

export default LeadPage;