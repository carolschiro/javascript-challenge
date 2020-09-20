// from data.js
var tableData = data;

function tableBuild() {
  var table = d3.select("tbody");
  data.forEach((data) => {
    var row = table.append("tr");
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
};

tableBuild(tableData);

var button = d3.select("#filter-btn");
button.on("click", filter);

function filter() {
    d3.event.preventDefault();
    var inputData = d3.select("#datetime");
    var value = inputData.property("value");
    var data = tableData.filter(j => j.datetime === value);
    var table = d3.select("tbody");
    table.html("");

    data.forEach((data) => {
        var row = table.append("tr");
        Object.entries(data).forEach(([key, value]) => {
            var cell1 = row.append("td");
            cell1.text(value);
        });
      });
};
