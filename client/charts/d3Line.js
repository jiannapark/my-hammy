import {
  select,
  max,
  axisLeft,
  axisBottom,
  scaleTime,
  scaleLinear,
  line as d3Line,
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
    .attr('class', 'line-chart-xaxis')
  select('#weight-chart')
    .append('g')
    .attr('class', 'line-chart-yaxis')
}

const drawAxes = () => {
  select('.line-chart-xaxis')
    .attr('transform', `translate(0, ${height - margin.bottom})`)
    .call(axisBottom(xScale))

  select('.line-chart-yaxis')
    .attr('transform', `translate(${margin.left}, 0)`)
    .call(axisLeft(yScale))
}

const buildLine = () => {
  select('#weight-chart')
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', '#ce67ab')
    .attr('stroke-width', 1.5)
    .attr('class', 'line-chart-line')
}

const buildMissingLine = () => {
  select('#weight-chart')
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', '#ccc')
    .attr('class', 'line-chart-missing-line')
}

const line = d3Line()
  .defined(d => d.weight)
  .x(scaleXData)
  .y(scaleYData)
  .curve(curveCardinal)

const drawLine = data => {
  select('.line-chart-line')
    .datum(data)
    .attr('d', line)
}

const drawMissingLine = data => {
  select('.line-chart-missing-line')
    .datum(data.filter(line.defined()))
    .attr('d', line)
}

const drawCircle = data => {
  select('svg')
    // .selectAll('circle')
    .data(data.filter(d => d.weight))
    .enter()
    .append('star')
    .attr('cx', d => xScale(new Date(d.date)))
    .attr('cy', d => yScale(d.weight))
    .attr('r', 3)
    .attr('fill', 'none')
    .attr('stroke', '#aaa')
}

const renderChanges = data => {
  drawAxes()
  drawMissingLine(data)
  drawLine(data)
  drawCircle(data)
}

const initializeChart = data => {
  buildAxes()
  buildMissingLine()
  buildLine()
  renderChanges(data)
}

export default initializeChart
