
const input_dep_picker = document.getElementById('dep-date-datepicker');
const input_ret_picker = document.getElementById('ret-date-datepicker');

const selected = document.querySelector('input[name="trip-type"]:checked');


const radioGroup = document.getElementById('radioGroup');

let picker;

radioGroup.addEventListener('click', function (event) {
  if (event.target && event.target.type === 'radio') {
    console.log("Selected:", event.target.value);
    if (event.target.value === "one-way-trip") {
      createPicker('single');
    }
    else {
      createPicker('multiple');
    }
  }
});


function createPicker(mode) {
  // Destroy old picker if exists
  if (picker) {
    picker.destroy();
  }

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

createPicker('multiple');