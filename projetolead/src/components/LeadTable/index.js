import './LeadTable.css'; 


function LeadTable({ leads, onLeadClick }) {
    const columns = {
        clientePotencial: [],
        dadosConfirmados: [],
        analiseLead: []
    };

    // Classifica os leads nas colunas corretas
    leads.forEach(lead => {
        if (lead.status === 'clientePotencial') {
            columns.clientePotencial.push(lead);
        } else if (lead.status === 'dadosConfirmados') {
            columns.dadosConfirmados.push(lead);
        } else if (lead.status === 'analiseLead') {
            columns.analiseLead.push(lead);
        }
    });

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
                    <tr>
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
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default LeadTable;