
 export default function modal(){
 
    function open(){
   document.querySelector('.modal-wrapper').classList.add("active")


    }

    function close(){


       document.querySelector('.modal-wrapper').classList.remove("active")
    }



  return{
   open,
   close 
}
}