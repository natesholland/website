
function start() {

var income = [[69272, 'Maryland'], [68342, 'New Jersey'], [67034, 'Connecticut'], [66953, 'Alaska'], [64098, 'Hawaii'], [64081, 'Massachuessets'], [60567, 'New Hampshire'], [59330, 'Virgina'], [59290, 'D.C.'], [58931, 'California']];
var adjusted = [[55502, 'Maryland'], [53197, 'New Jersey'], [53197, 'Connecticut'], [50447, 'Alaska'], [38716, 'Hawaii'], [54398, 'Massachuessets'], [51909, 'New Hampshire'], [60752, 'Virgina'], [42374, 'D.C.'], [44564, 'California']];
	
	chartW = 520;
	h = 390;
	y = 0;
	

 var chart = d3.select("body").append("svg")
	.attr("class", "chart")
	.attr("width", chartW)
	.attr("height", h);


chart.selectAll("pie") 
        .data(income)                              
    .enter().append("rect") 
		.attr("class", "income")
        .attr("x", 50)
		.attr("y", function(d){y+=33; return y})
        .attr("height", 30)
		.attr("width", 0)												//makes the width of each rectangle 0 so it can grow
    .transition()														//allows for transitions
        .duration(1500)													//makes the transition last 2000 milliseconds (2 seconds)
        .attr("width", function(d){ return d[0] / 200 + "px";})			//makes the width a function of the data inputed
		

};
