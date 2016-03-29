require(['d3'], function(d3) {
    var margin = {
            top: 10,
            right: 10,
            bottom: 100,
            left: 40
        },
        margin2 = {
            top: 430,
            right: 10,
            bottom: 20,
            left: 40
        },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom,
        height2 = 500 - margin2.top - margin2.bottom;
    var parseData = d3.time.format('%b %Y').parse;
    var x = d3.time.scale().range([0, width]), //建立数据容器  把数值转为时间标度再转为宽度
        x2 = d3.time.scale().range([0, width]),
        y = d3.scale.linear().range([height, 0]), //直线标度 Learning D3.js(1)学习制作一个柱形图/直方图
        y2 = d3.scale.linear().range([height2, 0]);

    var xAxis = d3.svg.axis().scale(x).orient("bottom"), //制作上图的X轴
        xAxis2 = d3.svg.axis().scale(x2).orient("bottom"), //制作下图的X轴
        yAxis = d3.svg.axis().scale(y).orient("left"); //制作上图的Y轴
})
