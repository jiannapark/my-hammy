// import {
//   select,
//   max,
//   axisLeft,
//   axisBottom,
//   format,
//   timeFormat,
//   scaleTime,
//   scaleLinear,
//   line as d3Line,
// } from 'd3'
// // import moment from 'moment'

// const xScale = scaleTime()
//   .domain([new Date(dateArray[0]), new Date()])
//   .range([0, 100])
// const yScale = scaleLinear()
//   .domain([0, max(weightArray)])
//   .range([100, 0])

// const scaleXData = (point) => xScale(new Date(point.date))
// const scaleYData = (point) => yScale(point.weight)

// const xAxis = axisBottom(xScale)
// const yAxis = axisLeft(yScale)

// const buildAxes = () => {
//   select('#weight-chart').append('g').attr('class', 'line-chart-yaxis')
//   select('#weight-chart').append('g').attr('class', 'line-chart-xaxis')
// }

// const buildLine = () => {
//   select('#weight-chart').append('path').attr('class', 'line-chart-line')
// }

// const drawAxes = () => {
//   select('.line-chart-xaxis').call(xAxis)
//   select('.line-chart-yaxis').call(yAxis)
// }

// const drawLine = (data) => {
//   const line = d3Line().x(scaleXData).y(scaleYData)
//   select('.line-chart-line').attr('d', line(data))
// }

// const renderChanges = (data) => {
//   // const filteredData = weights.filter((d) => d.weight)
//   drawAxes()
//   // console.log(filteredData)
//   drawLine(data)
// }

// lineChart.initializeChart = (data) => {
//   buildAxes()
//   buildLine()
//   renderChanges(data)
// }
