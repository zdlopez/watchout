// start slingin' some d3 here.
var data = [[50, 150],[1000, 1200],[100, 800]];

var svg = d3.select('#gameArea').append('svg')
  .attr('width', 800)
  .attr("height", 800);

var update = function(data){

  svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('r', 40 + 'px')
    .style('fill', 'red')
    .style('stroke', 'gray')
    .attr('cx', function(d,i){ return d[0] })
    .attr('cy', function(d,i){ return d[1] })
    .transition();

svg.selectAll('circle')
    .transition()
    .attr('cx', function(d,i){ return d[0] })
    .attr('cy', function(d,i){ return d[1] });

}

update(randomizer(data));

function randomizer(array) {
  var m = 700;
  for (var i=0; i<array.length; i++){
    array[i][0] = Math.floor(Math.random() * m);
    array[i][1] = Math.floor(Math.random() * m);
  }
  return array;
}

setInterval(function(){ return update(randomizer(data))}, 1500);
