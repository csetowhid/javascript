console.log(2 == 2 && 3 == 3);

function validate(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username == 'admin' && password == 123456){
        alert('Your are logged in');
    }else if(username == 'admin' || password == 123456){
        alert('Your Username or Password Dont Match');
    }else{
        alert('Credintial Dont Match');
    }
}