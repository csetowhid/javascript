const arr = ['Banana','Graps','Guava','Apple','Orange','Cherry','Strawberry'];

arr.forEach(function(element, index, array){
    // console.log(element, index);
    if(element == 'Apple'){
        element = element.toUpperCase();
    }else{
        element = element.toLowerCase();
    }
    console.log(element);
})

