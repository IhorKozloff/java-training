// const   tabmass = document.querySelectorAll('.tab');
const tabwrapper = document.querySelector('.tabs');
const contentwrapper = document.querySelector('.content');
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.btn');
const closebtn = document.querySelector('.close-btn')

    
const ChangeBtn = (xxx) => {
    for (z = 0; z < tabwrapper.children.length; z++) {
        tabwrapper.children[z].classList.remove('active')
    }
    xxx.classList.add('active')

}




const eventClick = tabwrapper.addEventListener('click', y => {
    curTab = y.target.dataset.tab;
    ChangeBtn(y.target);
    for (k = 0; k < contentwrapper.children.length; k++) {
        contentwrapper.children[k].classList.remove('active'); 

if (contentwrapper.children[k].dataset.content == curTab) {
    contentwrapper.children[k].classList.add('active');
};
    }
        
});




btn.addEventListener('click', () => {
    overlay.classList.add('active');
    


});


closebtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    
});




