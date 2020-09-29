import React from 'react'
import {connect} from 'react-redux'
import {getWeights} from '../store/diary'
import moment from 'moment'
import {
  select,
  max,
  axisLeft,
  axisBottom,
  format,
  timeFormat,
  scaleTime,
  scaleLinear,
  line as d3Line
} from 'd3'

export class WeightGraph extends React.Component {
  componentDidMount() {
    this.props.getWeights(1)
    // this.props.getWeights(this.props.hamsterId)
    // const hamsterId = this.props.match.params.id
  }

  render() {
    const {weights} = this.props
    // const data = weights.map((weight) => [weight.date, weight.weight])
    const dateArray = weights.map(weight => moment(weight.date).format('MM-DD'))
    const weightArray = weights.map(weight => weight.weight)

    const xScale = scaleTime()
      .domain([
        moment(new Date(dateArray[0])).format('MM-DD'),
        moment(new Date()).format('MM-DD')
      ])
      .range([0, 1000])
    const yScale = scaleLinear()
      .domain([0, max(weightArray)])
      .range([100, 0])

    const scaleXData = point => xScale(new Date(point))
    const scaleYData = point => yScale(point)

    const yAxis = axisLeft(yScale)
    const xAxis = axisBottom(xScale)

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
    }

    const drawAxes = () => {
      select('.line-chart-xaxis').call(xAxis)
      select('.line-chart-yaxis').call(yAxis)
    }

    const drawLine = data => {
      const line = d3Line()
        .x(scaleXData)
        .y(scaleYData)
      select('.line-chart-line').attr('d', line(data))
    }

    const drawChart = () => {
      const filteredData = weightArray.filter(d => d)
      buildAxes()
      buildLine()
      drawAxes()
      console.log(filteredData)
      drawLine(filteredData)
    }

    return weights.map(weight => (
      <div key={weight.date}>
        <svg
          viewBox="0 0 100 50"
          id="weight-chart"
          style={{border: '1px solid black'}}
          width="100%"
        />
        <button type="button" onClick={drawChart}>
          Draw chart
        </button>

        {/* <div>Date: {moment(weight.date).format('MM-DD-YYYY')}</div>
        <div>Weight: {weight.weight}</div> */}
      </div>
    ))
  }
}

const mapState = state => {
  return {
    hamsterId: state.hamster.selectedHamster.id,
    weights: state.diary.weights
  }
}

const mapDispatch = dispatch => {
  return {
    getWeights: hamsterId => dispatch(getWeights(hamsterId))
  }
}

export default connect(mapState, mapDispatch)(WeightGraph)
