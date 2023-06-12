(function(){
    
    const sliders = [...document.querySelectorAll('.section__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentsection = document.querySelector('.section__body--show').dataset.id;
        value = Number(currentsection);
        value+= add;


        sliders[Number(currentsection)-1].classList.remove('section__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('section__body--show');

    }

})();