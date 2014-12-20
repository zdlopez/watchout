// start slingin' some d3 here.
var data = [[50, 150],[1000, 1200],[100, 800]];
var playerData = [[400,400]];


var svg = d3.select('#gameArea').append('svg')
  .attr('width', 800)
  .attr("height", 800);


var drag = d3.behavior.drag().on('drag', function(d){
  //console.log(d);
  d3.select(this)
    // .data([d[0], d[1]])
    .attr('cy', d3.event.y)
    .attr('cx', d3.event.x);
    playerData[0] = d3.event.x;
    playerData[1] = d3.event.y;
  //console.log(this.data());

  });

svg.selectAll('#player')
  .data(playerData)
  .enter()
  .append('circle')
  .attr('r', 40 + 'px')
  .style('fill', 'blue')
  .style('stroke', 'gray')
  .attr('cx', function(d,i){ return d[0] })
  .attr('cy', function(d,i){ return d[1] })
  .call(drag);

var collision = function(){
  //var player = svg.select('#player');
  // console.log(playerData);
  // console.log(data);

  // var top = playerData[1] - 40;
  // var bottom = playerData[1] + 40;
  // var right = playerData[0] + 40;
  // var left = playerData[0] - 40;

  // for (var enemy = 0; enemy < data.length; enemy++){
  //   var etop =data[enemy][1] - 40;
  //   var ebottom = data[enemy][1] + 40;
  //   var eright = data[enemy][0] + 40;
  //   var eleft = data[enemy][0] - 40;

  var px = playerData[0];
  var py = playerData[1];
  var r2 = Math.pow((40*2), 2);

  for(var enemy = 0; enemy < data.length; enemy++){
    var ex = data[enemy][0];
    var ey = data[enemy][1];

    var distance = Math.pow(Math.abs(px - ex), 2) + Math.pow(Math.abs(py - ey), 2);
    if(distance < r2){
      console.log('collision');
    }

  }

}


var update = function(data){

  svg.selectAll('.circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'circle')
    .attr('r', 40 + 'px')
    .style('fill', 'red')
    .style('stroke', 'gray')
    .attr('cx', function(d,i){ return d[0] })
    .attr('cy', function(d,i){ return d[1] })
    .transition();

svg.selectAll('.circle')
    .transition()
    .attr('cx', function(d,i){ return d[0] })
    .attr('cy', function(d,i){ return d[1] });

}

update(randomizer(data));

function randomizer(array) {
  var m = 700;
  for (var i=0; i<array.length; i++){
    array[i][0] = Math.floor(Math.random() * m ) + 50;
    array[i][1] = Math.floor(Math.random() * m) + 50;
  }
  return array;
}

setInterval(function(){
  // collision();
  return update(randomizer(data))
}, 1500);

setInterval(function(){
  collision();
}, 50);

















