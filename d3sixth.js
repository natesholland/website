
function start() {

d3.cvs("C:\Users\lausd_user\Downloads\csv.csv", function (d) {

var income = [[69272, 'Maryland'], [68342, 'New Jersey'], [67034, 'Connecticut'], [66953, 'Alaska'], [64098, 'Hawaii'], [64081, 'Massachuessets'], [60567, 'New Hampshire'], [59330, 'Virgina'], [59290, 'D.C.'], [58931, 'California']];
var adjusted = [[55502, 'Maryland'], [53197, 'New Jersey'], [53197, 'Connecticut'], [50447, 'Alaska'], [38716, 'Hawaii'], [54398, 'Massachuessets'], [51909, 'New Hampshire'], [60752, 'Virgina'], [42374, 'D.C.'], [44564, 'California']];
	
	chartW = 520;
	h = 390;
	y = 0;
	y1 = 15;															//y1 variable for the function of the second bar graph

 var chart = d3.select("body").append("svg")
	.attr("class", "chart")
	.attr("width", chartW)
	.attr("height", h);


chart.selectAll("pie") 
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
		
chart.selectAll("taco") 												//Select all again
        .data(adjusted.reverse())                              			//uses the data but reverses it 
    .enter().append("rect") 											//adds a rectangle for each item in adjusted
		.attr("class", "adjusted")										//gives each rectangle the class 'adjusted'
        .attr("width", 0)												//gives each rectangle a function of the data
		.attr("y", 600)													//gives each rectangle a y coordinate that isnt overlapped
		.attr("x", 0)													//gives each the x coordinate of 25px
	    .attr("height", 15)												//gives each rectangle the height of 15px
	.transition()
		.duration(3000)
		.attr("width", function(d) {return d[0] / 200 + "px";})
		.attr("y", function(d) {y1+=30; return y1})
		.attr("x", 25);
    
        

};
});