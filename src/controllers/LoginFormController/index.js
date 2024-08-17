
function validateCredentials(data){
    const login = data.get('email');
    const password = data.get('password');
    let users = JSON.parse(localStorage.getItem('users')) || [];

    let user = users.find(user => user.email === login);
    if(!user){
        alert("Usuário não encontrado");
        return false;
    }

    if(user.password !== password){
        alert("Senha incorreta");
        return false;
    }


    return true;
}
export default validateCredentials;