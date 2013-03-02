
function start() {

var income = [[69272, 'Maryland'], [68342, 'New Jersey'], [67034, 'Connecticut'], [66953, 'Alaska'], [64098, 'Hawaii'], [64081, 'Massachuessets'], [60567, 'New Hampshire'], [59330, 'Virgina'], [59290, 'D.C.'], [58931, 'California']];
var adjusted = [[55502, 'Maryland'], [53197, 'New Jersey'], [53197, 'Connecticut'], [50447, 'Alaska'], [38716, 'Hawaii'], [54398, 'Massachuessets'], [51909, 'New Hampshire'], [60752, 'Virgina'], [42374, 'D.C.'], [44564, 'California']];
	
	chartW = 520;
	h = 390;
	y = 0;															//must initialize a y varible for the y cordinate of each rectangle
	

 var chart = d3.select("body").append("svg")
	.attr("class", "chart")
	.attr("width", chartW)
	.attr("height", h);


chart.selectAll("SELECT A CLASS IF NECESSARY")                      //will select all of certain class or id if given
        .data(income)       									    //bascially iterates through the data in the variable name 'income'		
    .enter().append("rect") 										//add a rectangle for each item in 'income'
		.attr("class", "income")									//gives each rectangle the class 'income' to be accessed by css
        .attr("x", 50)												//gives each rectangle the x cordinate of 50px
        .attr("height", 30)											//gives each rectangle a height of 30px
																	
		.attr("width", function(d){ return d[0] / 200 + "px";})		//makes the width of each rectangle the result of a function of the number given
																	//divided by 200 all in the units of px.  The odd choice to divide the input by 
																	//200 was made by playing around to see what looks nice.  Since our container is
																	//520 px and the first input is 69272 an easy number to divide by to make them fit
																	//was 200.
																	
		.attr("y", function(d){y+=30; return y});					//makes the y cordinate of each rectangle a function. By default the rectangles would 
																	//overlap. By making it a function this changes the y cordinate for each rectangle
																	

};
