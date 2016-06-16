var data = {
  // A labels array that can contain any sort of values
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [5, 2, 4, 2, 0]
  ]
};

var options = {
  height: window.innerHeight/2+'px',
  width: window.innerWidth/2+'px'
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
new Chartist.Bar('#bar', data, options);
new Chartist.Line('#line', data, options);

var container = {
  bar: document.getElementById('bar'),
  line: document.getElementById('line')
};

container.line.style.height = window.innerHeight/2+'px';
container.line.style.width = window.innerWidth/2.1+'px';

container.bar.style.height = window.innerHeight/2+'px';
container.bar.style.width = window.innerWidth/2.1+'px';
