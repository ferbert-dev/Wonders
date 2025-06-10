const burgerOpener = document.querySelector("#burger-opener");
const burgerIcon = document.querySelector("#burger-icon");
const burgerSection = document.querySelector("#burger")
const linksWrapperInBurger = document.querySelector("#burger ul");

let isOpened = false;


function openBurgerMenu(){
    burgerIcon.setAttribute("src", "assets/icons/burger_closed_icon.svg");
    burgerSection.classList.replace("burger__closed","burger__opened");
    document.body.classList.add('no-scroll');
}

function closedBurgerMenu(){
    burgerIcon.setAttribute("src", "assets/icons/burger_opened_icon.svg");
    burgerSection.classList.replace("burger__opened","burger__closed");
    document.body.classList.remove('no-scroll');
}


burgerOpener.addEventListener('click', function (event){
 isOpened =!isOpened;

if(isOpened){
   openBurgerMenu();
}
 else{
    closedBurgerMenu();
 }
});

linksWrapperInBurger.addEventListener('click', function(event){
    if(event.target.className === "burger__link"){
        closedBurgerMenu();        
    }
});



