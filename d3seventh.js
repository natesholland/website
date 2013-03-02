
function start() {
d3.csv("C:\Users\lausd_user\Desktop\test.csv", function (data) {

var income = [[1, '-580'], [68342, 'New Jersey'], [67034, 'Connecticut'], [66953, 'Alaska'], [64098, 'Hawaii'], [64081, 'Massachuessets'], [60567, 'New Hampshire'], [59330, 'Virgina'], [59290, 'D.C.'], [58931, 'California']];
var adjusted = [[55502, 'Maryland'], [53197, 'New Jersey'], [53197, 'Connecticut'], [50447, 'Alaska'], [38716, 'Hawaii'], [54398, 'Massachuessets'], [51909, 'New Hampshire'], [60752, 'Virgina'], [42374, 'D.C.'], [44564, 'California']];

//var csv_data = d3.csv.parseRows(data);



	chartW = 520;
	h = 390;
	y = 0;
	y1 = 15;
	
	//document.write(csv_data[0]);
	
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
        .attr("x", 0)													//x
        .attr("y", 600)													//gives the initial x coordinate of 600 px
        .attr("width", 0)												// width
	    .attr("height", 15)
    .transition()														// transition
		.delay(1000)													//delays the transition a second
        .duration(2000)													//the transition lasts 2 seconds
        .attr("width", function(d){ return d[0] / 200 + "px";})			//makes the bars grow 
		.attr("y", function(d){y1+=30; return y1})						//makes the bars not overlap
		.attr("x", 25);													//gives the final x coordinate of 25px
    
        

};);
};

