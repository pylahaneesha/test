function hac(){
let x=+prompt("enter the pin")
const pin=4321
const valid = x === pin

if(valid){
    alert("Access Granted");
    window.location.href="account.html";
}
else{
    alert("please enter valid pin");
 
}
}

function credit(){
    let x=+prompt("enter the pin")
    const pin=4321
    const valid = x === pin
    
    if(valid){
        alert("Access Granted");
        window.location.href="credit.html";
    }
    else{
        alert("please enter valid pin");
     
    }
    }

    function debit(){
        let x=+prompt("enter the pin")
        const pin=4321
        const valid = x === pin
        
        if(valid){
            alert("Access Granted");
            window.location.href="debit.html";
        }
        else{
            alert("please enter valid pin");
         
        }
        }