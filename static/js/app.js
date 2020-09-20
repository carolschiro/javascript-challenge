// from data.js
var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach((buildTable) => {
//  d3.event.preventDefault();
  var row = tbody.append("tr");
  Object.entries(buildTable).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value)
});


var button = d3.select("#filter-btn");
button.on("click", filter);

function filter() {
    d3.event.preventDefault();
   var inputData = d3.select("#datetime");
   var value = inputData.property("value");
   var data = tableData.filter(i => i.datetime === value);
   table.html("");

   tableData.forEach((data) => {
      var row = tbody.append("tr");
      Object.entries(data).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
      });
    });
  };
});