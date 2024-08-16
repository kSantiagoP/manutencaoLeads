

function processInputValues(data) {
    /*
        Testes necessários:
        1. Todos os campos estão preenchidos?
        2. As duas senhas estão iguais?
    */
    const name = data.get('name');
    const email = data.get('email');
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');

    // Testa se todos os campos estão preenchidos
    if (!name || !email || !password || !confirmPassword) {
        //converter essas mensagens de status em toastr
        console.error("Todos os campos devem ser preenchidos.");
        return false;
    }

    // Testa se as senhas são iguais
    if (password !== confirmPassword) {
        //converter essas mensagens de status em toastr
        console.error("As senhas não coincidem.");
        return false;
    }

    // Cria um objeto com os dados do novo usuário
    const newUser = {
        name,
        email,
        password, // Aqui estou armazenando a senha em plaintext, mas no mundo real deve haver um tratamento criptográfico antes de salvar.
    };

    // Obtém a lista de usuários do localStorage, se existir
    //implementar não repetição de email registrado
    let users = JSON.parse(localStorage.getItem('users')) || [];

   if(users.find(user => user.email === email)){
        console.error("E-mail já registrado.");
        return false;
   }
    // Adiciona o novo usuário à lista
    users.push(newUser);

    // Salva a lista atualizada no localStorage
    localStorage.setItem('users', JSON.stringify(users));

    //converter essas mensagens de status em toastr
  //  console.log("Usuários salvos no localStorage:");
   // console.log(users);
    return true;
}

export default processInputValues;