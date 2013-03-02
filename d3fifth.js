
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


chart.selectAll("SELECT A CLASS IF NECESSARY") 
        .data(income)                              
    .enter().append("rect") 
		.attr("class", "income")
        .attr("x", 50)
		.attr("y", 0)
		
        .attr("height", 15)											//By changing the height of the bars and not changing the function below there
																	//will be equal spaces between each bar
		.attr("width", 0)
    .transition()
        .duration(2000)
        .attr("width", function(d){ return d[0] / 200 + "px";})
		.attr("y", function(d){y+=30; return y})					//  **here**
		.attr("x", 25);

};
