// d3js is about binding data object to DOM elements
// Chart.js is better for building graphs and charts. 
// Whearas we have to do more with D3js, but it is more powerful since you can build things from scratch.

// select elem in DOM selectAll()
d3.select('.temporal-graph')
  .selectAll('p')
  .data([1, 2, 3])  // array of objects
  .enter()          // holds data to missing point
  .append('p')      // add missing element to each data point
  .text(data => data);          // for each p we add a text. In our example we are just displaying data
