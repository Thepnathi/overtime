// d3js is about binding data object to DOM elements
// Chart.js is better for building graphs and charts. 
// Whearas we have to do more with D3js, but it is more powerful since you can build things from scratch.

const DUMMY_DATA = [
    {id: "d1", value:12, region:"USA"},
    {id: "d2", value:7, region:"India"},
    {id: "d3", value:12, region:"German"},
    {id: "d4", value:5, region:"UK"},
]

// select elem in DOM selectAll()
d3.select('.temporal-graph')
  .selectAll('p')
  .data([1, 2, 3])  // array of objects
  .enter()          // holds data to missing point
  .append('p')      // add missing element to each data point
  .text(data => data);          // for each p we add a text. In our example we are just displaying data

class Drawable {
    constructor(html_element, data) {
        this.html_element = html_element;
        this.data = data;
    }

    drawBarGraph() {
        // give us ordinal scale - every item in data have same width. Uniform distribution
        const xScale = d3.scaleBand().rangeRound([0, 250]).padding(0.1);
        // calculate the right height for each data. Domain is min and max value for the data - translate to the coord
        const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);
        const container = d3.select(this.html_element).classed('container', true); // target class style
    
        container
            .selectAll('div') 
            .data(this.data)
            .enter()
            .append('rect')
            .classed('bar', true)
            .attr('width', xScale.bandwidth())
            .attr('height', data => yScale(data.value));
    }
}


drawBarGraph('svg', DUMMY_DATA);