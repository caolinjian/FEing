require(['d3'], function(d3) {
    const data = [4, 8, 15, 16, 23, 42];
    d3.select('body').selectAll('p')
        .data(data)
        .enter().append("p")
        .text((d,i) => `第${i+1}个数据是${d}`)
        .attr("class","items")
        .style("color","red");

    const width = 300;             //画布的宽度
    const height = 300;            //画布的高度
    const svg = d3.select("body")  //选择文档中的body元素
        .append("svg")           //添加一个svg元素
        .attr("width", width)    //设定宽度
        .attr("height", height); //设定高度

    const dataset = [ 250 , 210 , 170 , 130 , 90 ];  //可视化数据（表示矩形的宽度）
    const rectHeight = 25;   //每个矩形所占的像素高度(包括空白)
    svg.selectAll("rect") //选择 svg 内所有的矩形
        .data(dataset)    //绑定数组
        .enter()          //指定选择集的enter部分
        .append("rect")   //添加足够数量的矩形元素
        .attr("x",20)
        .attr("y",function(d,i){
             return i * rectHeight;
        })
        .attr("width",function(d){
             return d;
        })
        .attr("height",rectHeight-2)
        .attr("fill","steelblue");

    const dataset2 = [1.2, 2.3, 0.9, 1.5, 3.3];
    const min = d3.min(dataset2);
    const max = d3.max(dataset2);
    // 将 dataset 中最小的值，映射成 0；将最大的值，映射成 300。
    const linear = d3.scale.linear() // 4.2.2 中的 API 已经改变，不再是 d3.scale.linear
          .domain([min, max])
          .range([0, 300]);
    console.log(linear(0.9))    //返回 0
    console.log(linear(2.3))    //返回 175
    console.log(linear(3.3))    //返回 300
})
