
const input_dep_picker = document.getElementById('dep-date-datepicker');
const input_ret_picker = document.getElementById('ret-date-datepicker');
const picker = new Litepicker({
  element: input_dep_picker,
  singleMode: false,
  numberOfMonths: 2,
  numberOfColumns: 2,
  autoApply: false, // Shows Apply button
  showResetButton: true,
  format: 'DD MMM, YYYY',
  dropdowns: {
    minYear: 2020,
    maxYear: 2030,
    months: true,
    years: true,
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
    picker.on('apply', (date1, date2) => {
      // Custom action on apply, if needed
     input_dep_picker.value = date1;
     document.getElementById('ret-date-datepicker').value = date2;
     console.log(date1, date2);
    });
  }
});
