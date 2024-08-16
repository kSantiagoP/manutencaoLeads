

function processInputValues(data){
    console.log("dont poke the kaerlach");
    console.log(data);
    const name = data.get('name');
    const email = data.get('email');
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
}

export default processInputValues;