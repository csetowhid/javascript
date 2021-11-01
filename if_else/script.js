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

//False Values

Boolean();

undefined, null, NaN, 0, "", false;