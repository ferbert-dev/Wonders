
const input_dep_picker = document.getElementById('dep-date-datepicker');
const input_ret_picker = document.getElementById('ret-date-datepicker');
const picker = new Litepicker({
  element: input_dep_picker, 
  elementEnd:input_ret_picker,
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
      // Custom action on apply, if needed
     //input_dep_picker.value = date1;
     console.log(date1, date2);
    });
  }
});
