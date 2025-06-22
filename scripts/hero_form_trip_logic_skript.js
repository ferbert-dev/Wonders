
const input_dep_picker = document.getElementById('dep-date-datepicker');
const input_ret_picker = document.getElementById('ret-date-datepicker');

const input_return_div = document.getElementById('return_input_div');
const input_return_div_wrapper = document.getElementById('return_input_div_wrapper');
const selected = document.querySelector('input[name="trip-type"]:checked');


const radioGroup = document.getElementById('radioGroup');

let picker;

function hideReturnField(){
   input_return_div_wrapper.classList.replace("calendar-input-wrapper-last","calendar-input-wrapper-last-hidden");
}

function showReturnField(){
 input_return_div_wrapper.classList.replace("calendar-input-wrapper-last-hidden","calendar-input-wrapper-last");
}

radioGroup.addEventListener('click', function (event) {
  if (event.target && event.target.type === 'radio') {
    console.log("Selected:", event.target.value);
    if (event.target.value === "one-way-trip") {
       input_ret_picker.disabled = true;
      // hideReturnField(); this methods can be activated to hide Return field if there is one way trip. 
      // It was not requered, but can be used to make user experience better
      createPicker('single');
    }
    else {
      input_ret_picker.disabled = false;
      //showReturnField();
      // It was not requered, but can be used to make user experience better
      createPicker('multiple');
    }
  }
});


function createPicker(mode) {
  // Destroy old picker if exists
  if (picker) {
    picker.destroy();
  }
  cleanInput();
  
  if (mode === 'single') {
    picker = new Litepicker({
      element: input_dep_picker,
      singleMode: true,
      numberOfMonths: 2,
      footer: true,
      numberOfColumns: 2,
      autoApply: false, // Shows Apply button
      showResetButton: true,
      format: 'DD MMM, YYYY',
      dropdowns: {
        minYear: 2020,
        maxYear: 2030,
        months: false,
        years: false,
      },
      buttonText: {
        apply: 'Apply',
        reset: 'Reset',
      },
      tooltipText: {
        one: 'day',
        other: 'days',
      },
      setup: (picker) => {
        console.log("Hello ", picker);
        picker.on('apply', (date1, date2) => {

        });
      }
    });
  }
  else {
    picker = new Litepicker({
      element: input_dep_picker,
      elementEnd: input_ret_picker,
      singleMode: false,
      numberOfMonths: 2,
      footer: true,
      numberOfColumns: 2,
      autoApply: false, // Shows Apply button
      showResetButton: true,
      format: 'DD MMM, YYYY',
      dropdowns: {
        minYear: 2020,
        maxYear: 2030,
        months: false,
        years: false,
      },
      buttonText: {
        apply: 'Apply',
        reset: 'Reset',
      },
      tooltipText: {
        one: 'day',
        other: 'days',
      },
      setup: (picker) => {
        console.log("Hello ", picker);
        picker.on('apply', (date1, date2) => {

        });
      }
    });

  }
}

function cleanInput(){
   if(input_dep_picker.value){
    input_dep_picker.value ="";
   }
    if(input_ret_picker.value){
    input_ret_picker.value="";
   }
}

createPicker('multiple');