


const ulsubmenu = document.querySelectorAll('.ulsubmenu')
const aPasublink = document.querySelectorAll('.aPasublink')

for (let x=0; x<aPasublink.length; x++)

aPasublink[x].addEventListener('click',() =>{
    ulsubmenu[x].classList.toggle('show')

})

for (let x=0; x<ulsubmenu.length; x++)

ulsubmenu[x].addEventListener('click',() =>{
    ulsubmenu[x].classList.toggle('show')

})

const menu = document.querySelector('#ulmenu');
const header = document.querySelector('.header')

// abrir menu
const menuh = document.querySelector('#menuh');

menuh.addEventListener("click",()=>{

       menu.classList.toggle("mostrar");
} );

const submenuBtn = document.querySelectorAll(".aPafondo");

for(let i=0; i<submenuBtn.length; i++){
    submenuBtn[i].addEventListener("click",function(){
        if(window.innerWidth<468){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;
           

            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
              
               
            } else{
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";

            }
        }





    } )
}







header.addEventListener("click", (e)=>{

  
    if(e.target.classList.contains('alink')){
       
       menu.classList.remove('mostrar')}

});



