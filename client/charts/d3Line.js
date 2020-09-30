import {
  select,
  max,
  axisLeft,
  axisBottom,
  scaleTime,
  scaleLinear,
  line,
  curveNatural
} from 'd3'

const weightsData = JSON.parse(window.localStorage.getItem('weightsData'))
const dateArray = weightsData.map(weight => weight.date)
const weightArray = weightsData.map(weight => weight.weight)

const xScale = scaleTime()
  .domain([new Date(dateArray[0]), new Date()])
  .range([0, 700])
  .nice()

const yScale = scaleLinear()
  .domain([0, max(weightArray) + 50])
  .range([150, 0])
  .nice()

const scaleXData = d => xScale(new Date(d.date))
const scaleYData = d => yScale(d.weight)

const xAxis = axisBottom(xScale)
const yAxis = axisLeft(yScale)

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
    .attr('class', 'line-chart-line')
    .attr('fill', 'none')
    .attr('stroke', '#999')
}

const drawAxes = () => {
  select('.line-chart-xaxis').call(xAxis)
  select('.line-chart-yaxis').call(yAxis)
}

const drawLine = data => {
  const lineGenerator = line()
    .x(scaleXData)
    .y(scaleYData)
    .curve(curveNatural)

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
  buildAxes()
  buildLine()
  renderChanges(data)
}

export default initializeChart
