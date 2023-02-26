
var m=document.querySelector('.menu')
var links=document.querySelectorAll('.menu a')
var n=document.querySelector(' body');
var sp=document.querySelectorAll('.skills .progress span');
var pop=document.querySelector('.popup');
var li=document.querySelectorAll('.popup .colorchange span');
var root=document.querySelector(':root');
var h=document.querySelector('.welcome');
var inp=document.querySelector('.choose');
var wind=document.querySelector('.namechoose'); 
var cmnt=document.querySelector('.verif'); 
var sec=document.querySelector('.skills');
var y=document.querySelectorAll('.skills .content span');
var aud=document.querySelector('audio'); 
var namwr=document.querySelector('.namewriter'); 

if(sessionStorage.getItem('key')=='.ar'){
    document.querySelector('.ar').style.display="flex";
    document.querySelector('.en').style.display="none";

}

window.onscroll = function() {
    if(window.scrollY >= 10 ){
   
     document.querySelector('.render-vous').classList.add('bg')
     document.querySelector('.nav-bar').classList.add('n')

    }
    else{
        document.querySelector('.render-vous').classList.remove('bg')
        document.querySelector('.nav-bar').classList.remove('n')



    }
          


}
    

            
    
function startcount(el){
    let g=el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if( el.textContent == g){
            clearInterval(count);
        }
    }, 1000 / g);
}


function myname(){
    if(inp.value=="" ){
        cmnt.innerHTML="please write your name";
    }
    else if(inp.value.length > 10){
        cmnt.innerHTML="max 10 characters";

    }
    else{
        h.innerHTML ="welcome " + inp.value + " to my portfilio";
        wind.style.display="none";
        var stil = window.getComputedStyle(wind).getPropertyValue("display"); 
        if( stil == "none" ){
            namwr.classList.add('abc');  
        
           setTimeout("  namwr.style.width='0';",2500);         







}
    }
   

    

}





 
function chou(){
                
            
                root.style.setProperty('--main-color',    this.dataset.color);
                 
            }
    li.forEach((v)=> {
                v.style.background=v.dataset.color;
                v.addEventListener('click',chou 
                )}
            )

function showparametre(){
    pop.style.transform="translateY(0)";
}
function closepopup(){
    pop.style.transform="translateY(-1000px)";

}




function displaynavbar(){
    m.classList.add('d')
    

}

function closer(){
    m.classList.remove('d')

}
function mode(){
    n.classList.toggle("abc");

}



function f(){
    links.forEach((e)=>{
e.classList.remove('active')

}
)
   this.classList.add('active')
   m.classList.remove('d')


}
links.forEach((e)=>{
e.addEventListener('click',f)

}
)







function q(){
    document.querySelectorAll('.popup .window  .l').forEach((e)=>{
e.classList.remove('langue');

}
)
   this.classList.add('langue');
   document.querySelectorAll('.lou').forEach((a)=>{
    a.style.display='none';
 })
  
   document.querySelector(this.dataset.lan).style.display="flex";

sessionStorage.setItem('key',this.dataset.lan);



}



document.querySelectorAll('.popup .window  .l').forEach((e)=>{
e.addEventListener('click',q)


}
)






