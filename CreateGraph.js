<!DOCTYPE html>
<html>
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<body>
<p>Enter Equation:</p>
<p><input id="equation" type="text" value="x * 2 + 17"></p>
<p>
<button onclick='plot("scatter")'>Scatter</button>
<button onclick='plot("lines")'>Draw Lines</button>
</p>
<div id="myPlot" style="width:100%;max-width:700px"></div>

<script>
function plot(type) {
var exp = document.getElementById("equation").value;
var xValues = [];
var yValues = [];

// Generate values
for (var x = 0; x <= 10; x += 1) {
  xValues.push(x);
  yValues.push(eval(exp));
}

// Display using Plotly
var mode = "lines";
if (type == "scatter") {mode = "markers"}
var data = [{x:xValues, y:yValues, mode:mode, type:"scatter"}];
var layout = {title: "y = " + exp};
Plotly.newPlot("myPlot", data, layout);
}
</script>

</body>
</html>
