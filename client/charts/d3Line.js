import {
  select,
  max,
  axisLeft,
  axisBottom,
  scaleTime,
  scaleLinear,
  line,
  curveNatural,
  curveCardinal
} from 'd3'

const height = 250
const width = 400
const margin = {top: 20, right: 30, bottom: 30, left: 40}

const weightsData = JSON.parse(window.localStorage.getItem('weightsData'))
// .slice(6)
const dateArray = weightsData.map(weight => weight.date)
const weightArray = weightsData.map(weight => weight.weight)

const xScale = scaleTime()
  .domain([new Date(dateArray[0]), new Date()])
  .range([margin.left, width - margin.right])
  .nice()

const yScale = scaleLinear()
  .domain([0, max(weightArray) + 50])
  .range([height - margin.bottom, margin.top])
  .nice()

const scaleXData = d => xScale(new Date(d.date))
const scaleYData = d => yScale(d.weight)

const buildAxes = () => {
  select('#weight-chart')
    .append('g')
    .attr('class', 'line-chart-yaxis')
  select('#weight-chart')
    .append('g')
    .attr('class', 'line-chart-xaxis')
}

const buildLine = () => {
  select('#weight-chart')
    .append('path')
    // .datum(data.filter(line.defined()))
    .attr('class', 'line-chart-line')
    .attr('fill', 'none')
    .attr('stroke', '#999')
}

const drawAxes = () => {
  select('.line-chart-xaxis')
    .attr('transform', `translate(0, ${height - margin.bottom})`)
    .call(axisBottom(xScale))

  select('.line-chart-yaxis')
    .attr('transform', `translate(${margin.left}, 0)`)
    .call(axisLeft(yScale))
}

const drawLine = data => {
  const lineGenerator = line()
    .defined(d => d.weight)
    .x(scaleXData)
    .y(scaleYData)
    .curve(curveCardinal)
  select('.line-chart-line').attr('d', lineGenerator(data))
}

const drawCircle = data => {
  select('svg')
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', d => xScale(new Date(d.date)))
    .attr('cy', d => yScale(d.weight))
    .attr('r', 3)
    .attr('fill', 'none')
    .attr('stroke', '#aaa')
}

const renderChanges = data => {
  // const filteredData = weights.filter((d) => d.weight)
  drawAxes()
  drawCircle(data)
  drawLine(data)
}

const initializeChart = data => {
  // TODO: draw except for undefined/null data points
  // TODO: scale & box sizing
  buildAxes()
  buildLine()
  renderChanges(data)
}

export default initializeChart
