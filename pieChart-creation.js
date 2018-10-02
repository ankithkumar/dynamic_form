// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
let storage;

window.addEventListener('load', () => {
  console.log('loaded');
  storage = storageFactory();
  storage.init();
});

// Draw the chart and set the chart values
function drawChart() {
  let typeData = storage.getData();

  var data = google.visualization.arrayToDataTable([
  ['types', 'votes'],
  [typeData.type1.name, typeData.type1.count],
  [typeData.type2.name, typeData.type2.count],
  [typeData.type3.name, typeData.type1.count]  
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'votes', 'width':800, 'height':500};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
