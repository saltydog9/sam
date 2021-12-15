 var  a=0, b=0,c=0,d=0, arry=[],may=[],ray=[],say=[];

 bo1=document.querySelector("#bo1");
 bo2=document.querySelector("#bo2");
 bo3=document.querySelector("#bo3");
 bo4=document.querySelector("#bo4");
 
 document.addEventListener("keydown",function(event){
     var v=event.key;
    if(v=="i"){
    fun1();
    }
    else if(v=="u"){
        fun2()
    }
 })
 function fun1() {
    for(var i=0;i<10;i++){
    var rand = Math.floor(Math.random() *10);
    if(rand%2==0){
    may.push(rand)
    arry.push(i);
    }
    }
    bo2.innerHTML=arry;
    bo1.innerHTML=may;
 }
 function fun2() {
    bo1.innerHTML="";
    bo2.innerHTML="";
 }