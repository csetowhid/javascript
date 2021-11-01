const num = 5;
if(num > 3 ){
    console.log("Boro");
}else{
    console.log("Coto");
}


function check(){
    const ans = 40;
    const usr = document.getElementById('user_input').value;
    if(ans == usr){
        alert('Your are Correct');
    }else{
        alert('Your are wrong');
    }
}