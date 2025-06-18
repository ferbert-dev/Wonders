const counter = document.querySelector("#counter");
const display = document.querySelector("#trip-counter");

let count = 0;
const delay_time = 250;

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const debouncedCounterHandler = debounce(counterHandler, delay_time);

function counterHandler(event){  
 console.log("hello event: ", event.target.id);
   if(event.target.id==='trip-minus' && count>0){
    count--;
    display.textContent = count;
   }
    else if(event.target.id==='trip-plus' && count<10){
    display.textContent = ++count;
    }
}

function initCounter(){
    display.textContent = count;
}


counter.addEventListener('click', counterHandler);
initCounter();