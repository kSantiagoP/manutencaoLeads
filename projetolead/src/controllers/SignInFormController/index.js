

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
        alert("Todos os campos devem ser preenchidos.");
        return false;
    }

    // Testa se as senhas são iguais
    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return false;
    }

    //Testa o comprimento da senha
    if(password.length < 8){
        alert("A senha deve ter pelo menos 8 caracteres.");
        return false;
    }

    // Testa se a senha contém pelo menos um caractere alfanumérico e um caractere especial
    const alphanumericRegex = /[a-zA-Z0-9]/; // Regex para alfanumérico
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/; // Regex para caracteres especiais

    if (!alphanumericRegex.test(password)) {
        alert("A senha deve conter pelo menos um caractere alfanumérico.");
        return false;
    }

    if (!specialCharRegex.test(password)) {
        alert("A senha deve conter pelo menos um caractere especial.");
        return false;
    }


    // Cria um objeto com os dados do novo usuário
    const newUser = {
        name,
        email,
        password, // Aqui estou armazenando a senha em plaintext, mas no mundo real deve haver um tratamento criptográfico antes de salvar.
    };

    // Obtém a lista de usuários do localStorage, se existir
    let users = JSON.parse(localStorage.getItem('users')) || [];

   if(users.find(user => user.email === email)){
        alert("E-mail já registrado.");
        return false;
   }
    // Adiciona o novo usuário à lista
    users.push(newUser);

    // Salva a lista atualizada no localStorage
    localStorage.setItem('users', JSON.stringify(users));

    return true;
}

export default processInputValues;