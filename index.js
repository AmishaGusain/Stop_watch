const display=document.getElementById("display");
let timer=null;
let st=0;
let et=0;
let isrunning = false;
function start(){
if(!isrunning)
    {
     st=Date.now()-et;//in ms
     timer=setInterval(update,10);
     isrunning=true;
      
    }

}
function stop(){
  if(isrunning)  
    {
clearInterval(timer);
et=Date.now-st;
isrunning=false;
    }
}
function reset(){
   clearInterval(timer);
     st=0;
     et=0;
    isrunning = false; 
    display.textContent="00:00:00:00";
}
function update()
{
const curr=Date.now();
et=curr-st;
let hours=Math.floor(et/(1000*60*60));
let min=Math.floor(et/(1000*60)%60);
let sec=Math.floor(et/1000%60);
let mil=Math.floor(et%1000/10);
hours=String(hours).padStart(2,"0");
min=String(min).padStart(2,"0");
sec=String(sec).padStart(2,"0");
mil=String(mil).padStart(2,"0");
display.textContent=`${hours}:${min}:${sec}.${mil}`;

}