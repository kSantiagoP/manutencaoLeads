import './LeadTable.css'; 
import LeadTableRow from '../LeadTableRow';


function LeadTable({ leads, onLeadClick }) {

    return (
        <div className="leadTableContainer">
            <table className="leadTable">
                <thead>
                    <tr>
                        <th>Cliente Potencial</th>
                        <th>Dados Confirmados</th>
                        <th>Análise do Lead</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map((lead, key) =>{
                        return(
                            <LeadTableRow lead={lead} idRow={key} onLeadClick={onLeadClick}></LeadTableRow>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default LeadTable;

/*


<td>
                            {columns.clientePotencial.map(lead => (
                                <div
                                    key={lead.email}
                                    className="leadItem"
                                    onClick={() => onLeadClick(lead)}
                                >
                                    {lead.name}
                                </div>
                            ))}
                        </td>
                        <td>
                            {columns.dadosConfirmados.map(lead => (
                                <div
                                    key={lead.email}
                                    className="leadItem"
                                    onClick={() => onLeadClick(lead)}
                                >
                                    {lead.name}
                                </div>
                            ))}
                        </td>
                        <td>
                            {columns.analiseLead.map(lead => (
                                <div
                                    key={lead.email}
                                    className="leadItem"
                                    onClick={() => onLeadClick(lead)}
                                >
                                    {lead.name}
                                </div>
                            ))}
                        </td>
*/