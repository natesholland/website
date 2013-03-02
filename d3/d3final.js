
function start() {

var income = [[69272, 'Maryland'], [68342, 'New Jersey'], [67034, 'Connecticut'], [66953, 'Alaska'], [64098, 'Hawaii'], [64081, 'Massachuessets'], [60567, 'New Hampshire'], [59330, 'Virgina'], [59290, 'D.C.'], [58931, 'California']];
var adjusted = [[55502, 'Maryland'], [53197, 'New Jersey'], [53197, 'Connecticut'], [50447, 'Alaska'], [38716, 'Hawaii'], [54398, 'Massachuessets'], [51909, 'New Hampshire'], [60752, 'Virgina'], [42374, 'D.C.'], [44564, 'California']];
	keyW = 135;												//add a new width
	chartW = 385;											//change width
	h = 390;
	y = 0;
	ytext = 10;												//for the position of text
	y1 = 15;
	y1text = 25;											//for the position of text

		
var key = d3.select("body").append("svg")					//create a new svg board
	.attr("class", "key")									//class name
	.attr("width", keyW)									//width
	.attr("height", h);										//height


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
        .attr("height", 15)
		.attr("width", 0)
    .transition()
        .duration(2000)
        .attr("width", function(d){ return d[0] / 200 + "px";})
		.attr("y", function(d){y+=30; return y})
		.attr("x", 25);
		
	
chart.selectAll("SELECT A CLASS IF NECESSARY") 
        .data(adjusted.reverse())                              
    .enter().append("rect") 
		.attr("class", "adjusted")
        .attr("x", 0)
        .attr("y", 600)
        .attr("width", 0)
	    .attr("height", 15)
    .transition()
		.delay(1000)
        .duration(2000)
        .attr("width", function(d){ return d[0] / 200 + "px";})
		.attr("y", function(d){y1+=30; return y1})
		.attr("x", 25);
		
key.selectAll("select")												//select from
		.data(income)												//use the data 'income'
	.enter().append("text")											//append some text
		.attr("class", "chartText")									//give the text a class
		.attr("x", 2) 												//x coordinate
		.attr("y", function(d){ytext+=30; return ytext})			//y coordinate that doesn't overlap
		.text(function(d){return d});								//return the text from income
		
	
key.selectAll("select")												//select from
		.data(adjusted.reverse())									//use the data from adjusted
	.enter().append("text")											//append a text
		.attr("class", "chartText")									//give the text a class 
		.attr("x", 100) 											//initial x coordinate
		.attr("y", function(d){y1text+=30; return y1text})			//y coordinate doesn't overlap
		.text(function(d){return d[0]})								//return the text from that income
	.transition()													//transition
		.duration(1500)												//transition lasts 1.5 seconds
		.attr("x", 2);												//final x position of 2px
	
		
};
