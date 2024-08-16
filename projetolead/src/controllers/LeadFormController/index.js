

function processLeadValues(data){
    const name = data.get("name");  
    const email = data.get("email");  
    const phone = data.get("phone");   
    const option1 = data.get("option1");  
    const option2 = data.get("option2");  
    const option3 = data.get("option3");  
    const option4 = data.get("option4");  
    const status = "clientePotencial";

    if(!name || !email || !phone){
        alert("Campos de identificação são obrigatórios")
        return false;
    }

    const newLead = {
        name,
        email,
        phone,
        option1,
        option2,
        option3,
        option4,
        status
    }

    // Obtém a lista de leads do localStorage, se existir
    let leads = JSON.parse(localStorage.getItem('leads')) || [];

    if(leads.find(lead => lead.email === email)){
        alert("E-mail já registrado.");
        return false;
   }

   leads.push(newLead);

   localStorage.setItem('leads', JSON.stringify(leads));

   return true; 
}


export default processLeadValues;