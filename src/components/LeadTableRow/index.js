import LeadCell from '../LeadTableCell';
import { useState } from 'react';
import updateNewStatus from '../../controllers/LeadTableController';

function LeadTableRow({lead, idRow, onLeadClick}){
    const [row, setRow] = useState(lead);
    let col1 = null, col2 = null, col3 = null, fun1 = null, fun2 = null, fun3 = null;

    switch(row.status){
        case "clientePotencial":
            col1 = row;
            fun1 = handle;
            break;
        case "dadosConfirmados":
            col2 = row;
            fun2 = handle;
            break;

        case "analiseLead":
            col3 = row;
            fun3 = handle;
            break;
        
        default:
            break;
    }

    function swapColumn(i1, i2){
        if((i1 === "clientePotencial" && i2 === "dadosConfirmados") || (i1 ===  "dadosConfirmados" && i2 === "analiseLead")){
            setRow((v) => {
                const updatedRow = {
                    ...v,       
                    status: i2  
                };
                updateNewStatus(updatedRow);
                return updatedRow;
            });
        }

    }

    function handle(){
        onLeadClick(row);
    }

    return(
        <tr>
            <LeadCell value={col1? col1.name : ""} onDrop={swapColumn} index={"clientePotencial"} data={col1} onClick={fun1} idRow={idRow}></LeadCell>
            <LeadCell value={col2? col2.name : ""} onDrop={swapColumn} index={"dadosConfirmados"} data={col2} onClick={fun2} idRow={idRow} ></LeadCell>
            <LeadCell value={col3? col3.name : ""} onDrop={swapColumn} index={"analiseLead"} data={col3} onClick={fun3} idRow={idRow}></LeadCell>
        </tr>
    )
}


export default LeadTableRow;