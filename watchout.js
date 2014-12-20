// start slingin' some d3 here.
var data = [[50, 150],[1000, 1200],[100, 800]];
var playerData = [[400,400]];


var svg = d3.select('#gameArea').append('svg')
  .attr('width', 800)
  .attr("height", 800);


var drag = d3.behavior.drag().on('drag', function(d){
  d3.select(this)
    .attr('cy', d3.event.y)
    .attr('cx', d3.event.x);
    playerData[0] = d3.event.x;
    playerData[1] = d3.event.y;
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
  // var cx = d3.selectAll('.circle')
  //   .attr('cx');
  // var cy = d3.selectAll('.circle')
  //   .attr('cy');

  var arrEnemy = d3.selectAll('.circle');
  console.log(arrEnemy[0]);

    // console.log(arrEnemy);

  // console.log('cx is: ' + cx + 'cy is : ' + cy);

  var px = playerData[0];
  var py = playerData[1];
  var r2 = Math.pow((40*2), 2);

  for(var enemy = 0; enemy < data.length; enemy++){
    var ex = arrEnemy[0][enemy].attr('cx');
    var ey = arrEnemy[0][enemy].attr('cy');

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
}, 1500);

















