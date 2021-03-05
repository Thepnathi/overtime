
var nodes = [
    {name: 'A'},
    {name: 'B'},
    {name: 'C'},
    {name: 'D'},
    {name: 'E'},
    {name: 'F'},
    {name: 'G'},
    {name: 'H'},
   ]

var links = [
    {source: 0, target: 1},
    {source: 0, target: 2},
    {source: 0, target: 3}
  ]

class StaticForceLayout {
    constructor(htmlElement, data) {
        this.htmlElement = htmlElement;
        this.data = data;
    }

    drawLayout() {
        var simululation = d3.forceSimulation(nodes)
            .force('center', d3.forceCenter(width/2, height/2))
            .force('link', d3.forceLink().links(links))
            .on('tick', this.ticked);
    }

    ticked() {
        this.updateLinks()
        this.updateNodes()
    }

    updateLinks() {
        var u = d3.select('.links')
        .selectAll('line')
        .data(links)

        u.enter()
            .append('line')
            .merge(u)
            .attr('x1', function(d) {
                return d.source.x
            })
    }
}
