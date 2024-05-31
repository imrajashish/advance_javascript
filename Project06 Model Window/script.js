'use strict';
  
let modal =document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnCloseModel = document.querySelector('.close-modal')
const btnOpenModel = document.querySelectorAll('.show-modal')

    const openModel = function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        
    }
    const closeModel =   function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden')
    }

    

    for (let index = 0; index < btnOpenModel.length; index++) {
        btnOpenModel[index].addEventListener ('click', openModel);
        
        btnCloseModel.addEventListener ('click', closeModel);

        overlay.addEventListener ('click', closeModel);

        document.addEventListener('keydown', function(a){
            if(a.key === 'Enter' && !modal.classList.contains('hidden')) {
                    closeModel();
                }
        })


    }

