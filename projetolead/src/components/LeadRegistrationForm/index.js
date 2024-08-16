import TextField from "../TextField";
import EmailField from "../EmailField";
import Button from "../Button";
import Checkbox from "../Checkbox"; 
import useCheckboxController from "../../controllers/CheckboxController";
import processLeadValues from "../../controllers/LeadFormController";

function LeadRegistrationForm({ lead, closeModal }) {
    const { checkboxes, handleCheckboxChange } = useCheckboxController();
    const isEditMode = lead !== undefined && lead !== null;

    const handleCancel = (event) => {
        event.preventDefault();
        closeModal();
    }

    const handleSubmit = (event) => {
        if (!processLeadValues(new FormData(event.target))) {
            event.preventDefault();
        }
    } 

    return (
        <section className="leadFormSection">
            <h2>{isEditMode ? "Detalhes do Lead" : "Novo Lead"}</h2>
            <p>Dados do Lead</p>
            <form className="leadForm" onSubmit={handleSubmit}>
                <TextField 
                    label="Nome Completo*" 
                    name='name' 
                    placeholder="Nome Completo" 
                    value={isEditMode ? lead.name : null} 
                    disabled={isEditMode} 
                />
                <EmailField 
                    label="E-mail*" 
                    name='email' 
                    placeholder="E-mail"  
                    value={isEditMode ? lead.email : null} 
                    disabled={isEditMode} 
                />
                <TextField 
                    label='Telefone*' 
                    name='phone' 
                    placeholder="Telefone"  
                    value={isEditMode ? lead.phone : null} 
                    disabled={isEditMode} 
                />
                
                <p>Oportunidades</p>
                <div className="checkbox-group">
                    <Checkbox 
                        label="Todos" 
                        name="all" 
                        checked={checkboxes.all} 
                        onChange={handleCheckboxChange} 
                        disabled={isEditMode}
                    />
                    <Checkbox 
                        label="Honorários Sucumbenciais" 
                        name="option1" 
                        checked={isEditMode ? lead.option1 : checkboxes.option1} 
                        onChange={handleCheckboxChange}  
                        disabled={isEditMode}
                    />
                    <Checkbox 
                        label="Honorários Contratuais" 
                        name="option2"  
                        checked={isEditMode ? lead.option2 : checkboxes.option2} 
                        onChange={handleCheckboxChange} 
                        disabled={isEditMode}
                    />
                    <Checkbox 
                        label="Honorários Dativos" 
                        name="option3" 
                        checked={isEditMode ? lead.option3 : checkboxes.option3} 
                        onChange={handleCheckboxChange} 
                        disabled={isEditMode}
                    />
                    <Checkbox 
                        label="Crédito do Autor" 
                        name="option4" 
                        checked={isEditMode ? lead.option4 : checkboxes.option4} 
                        onChange={handleCheckboxChange} 
                        disabled={isEditMode}
                    />
                </div>

                <div className="button-group">
                    <Button centralize={false} color="#CCCCCC" handleClick={handleCancel}>Cancelar</Button>
                    {!isEditMode && <Button centralize={false} color="#2798BA">Salvar</Button>}
                </div>
            </form>
        </section>
    )
}

export default LeadRegistrationForm;