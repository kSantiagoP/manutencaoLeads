import {useState} from 'react';
import LeadRegistrationForm from '../../components/LeadRegistrationForm';
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Modal from "react-modal";
import LeadTable from '../../components/LeadTable';
import './LeadPage.css';

const customStyles = {
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    },
};


function LeadPage(){
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedLead, setSelectedLead] = useState(null);

    const leads = JSON.parse(localStorage.getItem('leads')) || []; 



    function openModal(lead) {
        setSelectedLead(lead);
        setIsOpen(true);
    }

    function closeModal(event) {
        setIsOpen(false);
    } 
    
    function handleClick(){
        openModal();
    }
    return(
        <div>
            <Logo></Logo>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                    <LeadRegistrationForm  lead={selectedLead} closeModal={closeModal}></LeadRegistrationForm>
            </Modal>
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                <Button color="#2798BA" handleClick={handleClick} centralize={false} >+ Novo Lead</Button>
            </div>
            <LeadTable leads={leads} onLeadClick={openModal} />
           
        </div>

    )
}

export default LeadPage;