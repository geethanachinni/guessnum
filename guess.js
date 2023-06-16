var c=((Math.random()*100)+1);
var a=Math.round(c);
var i=0;
guess=()=>{
    i++;
    var b=parseInt(document.getElementById("num").value);
    
    if(a==b){
        document.getElementById("output").textContent=("Congratulations!!! you have got the number in "+i+" tries");
    }
    else if(a>b){
        document.getElementById("output").textContent=("Try a greater number in "+i+"tries");   
    }
    else{
        document.getElementById("output").textContent=("Try a smaller number in "+i+"tries");  
    }
}
