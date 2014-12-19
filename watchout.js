// start slingin' some d3 here.
var data = [1,2,3,4];

var svg = d3.select('#gameArea').append('svg')
  .attr('width', 1500)
  .attr("height", 1500);


svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('r', 40 + 'px')
  .style('fill', 'red')
  .style('stroke', 'gray')
  .attr('cx', function(d,i){ return d*100 })
  .attr('cy', 100);

