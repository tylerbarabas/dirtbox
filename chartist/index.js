var data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  series: [
    [5, 2, 4, 2, 0]
  ]
};

var options = {
  height: window.innerHeight/2+'px',
  width: window.innerWidth/2+'px'
};

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
