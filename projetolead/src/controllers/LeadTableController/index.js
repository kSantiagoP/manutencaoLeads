

function updateNewStatus(data){
   // console.log(data);
    let leads = JSON.parse(localStorage.getItem('leads')) || [];


    const newLeads = leads.map(lead => lead.email === data.email ? {...lead, status: data.status} : lead);


    localStorage.setItem('leads', JSON.stringify(newLeads));

}

export default updateNewStatus;