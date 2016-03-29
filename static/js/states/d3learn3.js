require(['d3'], function(d3) {
    var dataset = [
        [5, 20, 1],
        [480, 90, 2],
        [250, 50, 3],
        [100, 33, 4],
        [330, 95, 5],
        [410, 12, 6],
        [475, 44, 7],
        [25, 67, 8],
        [85, 21, 9],
        [220, 88, 10],
        [600, 150, 11]
    ];
    var w = 600;
    var h = 400;
    var padding = 50;
    var chart = d3.select('body')
        .append('svg')
        .attr('width', w)
        .attr('height', h);
    var xScale = d3.scale.linear()
        .domain([0, d3.max(dataset, function(d) {
            return d[0];
        })])
        .range([padding, w - padding]);
    var yScale = d3.scale.linear()
        .domain([0,d3.max(dataset,function(d){
            return d[1];
        })])
        .range([h-padding,padding]);
    var rScale = d3.scale.linear()
        .domain([0,d3.max(dataset,function(d){
            return d[1];
        })])
        .range([5,15]);
    chart.selectAll('circle')
        .data(dataset)
        .enter().append('circle')
        .attr('cx',function(d){
            return xScale(d[0]);
        }).attr('cy',function(d){
            return yScale(d[1]);
        }).attr('r',function(d){
            return rScale(d[1]);
        })
    setInterval(function(){
        dataset.push(dataset.shift());
        redraw();
    },1000);
    function redraw(){
        chart.selectAll('circle')
            .data(dataset)
            .transition()
            .duration(1000)
            .attr('cy',function(d){
                return yScale(d[1]);
            })
            .attr('r',function(d){
                return rScale(d[1]);
            })
    }
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient('bottom').ticks(5)
    chart.append('g')
        .attr('class','axis')
        .attr('transform','translate(0,'+(h-padding)+')')
        .call(xAxis);
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left').ticks(5)
    chart.append('g')
        .attr('class','axis')
        .attr('transform','translate(30,0)')
        .call(yAxis); 
})
