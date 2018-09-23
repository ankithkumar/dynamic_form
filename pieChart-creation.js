// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'jyothi day spent'],
  ['Work', 2],
  ['Eat', 4],
  ['TV', 4],
  ['chatting', 2],
  ['Sleep', 12]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'My Average Day', 'width':800, 'height':500};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
