
function sum(){
    let x = document.getElementById('fv').value;
    let y = document.getElementById('sv').value;

    let xValue=parseInt(x)
    let yValue=parseInt(y)
   const result=xValue + yValue;

   document.getElementById('final').innerHTML="Result is=" + result
}
function sub(){
    let x = document.getElementById('fv').value;
    let y = document.getElementById('sv').value;

    let xValue=parseInt(x)
    let yValue=parseInt(y)
   const result=xValue - yValue;

   document.getElementById('final').innerHTML="Result is=" + result
}
function mul(){
    let x = document.getElementById('fv').value;
    let y = document.getElementById('sv').value;

    let xValue=parseInt(x)
    let yValue=parseInt(y)
   const result=xValue * yValue;

   document.getElementById('final').innerHTML="Result is=" + result
}
function div(){
    let x = document.getElementById('fv').value;
    let y = document.getElementById('sv').value;

    let xValue=parseInt(x)
    let yValue=parseInt(y)
   const result=xValue / yValue;

   document.getElementById('final').innerHTML="Result is=" + result
}
function show(){
    document.getElementById("content").style.display="block"

}
