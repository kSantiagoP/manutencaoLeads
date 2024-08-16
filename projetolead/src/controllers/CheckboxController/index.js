import { useState } from 'react';

function useCheckboxController() {
    const [checkboxes, setCheckboxes] = useState({
        all: true,
        option1: true,
        option2: true,
        option3: true,
        option4: true,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        if (name === "all") {
            // Se a checkbox "Todos" for marcada/desmarcada, aplica a mudança a todas as outras checkboxes.
            setCheckboxes({
                all: checked,
                option1: checked,
                option2: checked,
                option3: checked,
                option4: checked,
            });
        } else {
            // Se qualquer outra checkbox for marcada/desmarcada, atualiza seu estado individualmente.
            setCheckboxes((prevState) => ({
                ...prevState,
                [name]: checked,
                all: checked && Object.values(prevState).slice(1).every(v => v),
            }));
        }
    };

    return {
        checkboxes,
        handleCheckboxChange,
    };
}

export default useCheckboxController;