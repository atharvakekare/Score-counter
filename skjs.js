const p1button=document.querySelector('#p1button');
const p2button=document.querySelector('#p2button');
const reset=document.querySelector('#reset');
const p1display=document.querySelector('#p1display');
const p2display=document.querySelector('#p2display');
const playername1=document.querySelector('player-1');
const playername2=document.querySelector('player-2');

let p1score=0;
let p2score=0;
let winingscore=5;
let isgameover=false;




p1button.addEventListener('click',function(){
if( !isgameover){
 p1score += 1;
 if(p1score==winingscore){
   alert("PLAYER 1 WINS");
    isgameover=true;
    
} 
p1display.textContent=p1score;
    
 
 
}
})

p2button.addEventListener('click',function(){
    
    
    if( !isgameover){
     p2score += 1;
     if(p2score==winingscore){
      alert("PLAYER 2 WINS");
      isgameover=true;
      
      
    }
    
     p2display.textContent=p2score;
    
    }
    })
    

   
    reset.addEventListener('click',function()
    {   alert("are you sure?");
       if(alert=true){
        isgameover=false;
        p1score=0;
        p2score=0;
        p1display.textContent=0;
        p2display.textContent=0;
       }
       else if(alert!=true){
        p1display.textContent=p1score;
        p2display.textContent=p2score;
       }
    })
   
    