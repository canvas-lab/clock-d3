var log = console.log;

var svg = d3.select('svg');
var arc = d3.arc()
            .innerRadius(100)
            .outerRadius(200)
            .startAngle(0)
            .endAngle(Math.PI);

function render() {

  svg.append('g')
     .attr('transform', 'translate(400,400)')
     .append('path')
     .attr('class', 'arc')
     .attr('d', function() { return arc(); });
}

render();
