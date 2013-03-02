
function start() {

var format = d3.time.format("%b %Y");

d3.csv("C:\Users\lausd_user\Desktop\test.csv", function(stocks) {
  stocks.forEach(function(d) {
    d.price = +d.price;
    d.date = format.parse(d.date);
  });
  document.write(stocks);
});


};
