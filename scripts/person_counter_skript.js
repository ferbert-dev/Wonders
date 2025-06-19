const counter = document.getElementById('counter-section');
const display = document.getElementById('trip-counter');

let count=0;

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function counterHandler(event){  
  event.preventDefault();
  event.stopPropagation();
  console.log("hello event: ", event);
  if(event.target.id === 'trip-minus' && count>0){
    count--;
  }
  else if(event.target.id === 'trip-plus' && count<10){
  count++;
  }
  display.textContent = count;
}

function initCounter(){
    count = 1;
    display.textContent = count;
}

const debouncedCounterHandler = debounce(counterHandler, 213);

if (counter && display) {
  counter.addEventListener('click', debouncedCounterHandler);
  
  initCounter();
} else {
  console.error("Required DOM elements '#counter' or '#trip-counter' not found.");
}