import React from 'react'
import {connect} from 'react-redux'
import initializeChart from '../charts/d3Line'

export class WeightGraph extends React.Component {
  componentDidMount() {
    const weightsData = JSON.parse(window.localStorage.getItem('weightsData'))
    initializeChart(weightsData)
  }

  componentDidUpdate(prevProps) {}

  componentWillUnmount() {}

  render() {
    return (
      <svg
        id="weight-chart"
        style={{border: '1px solid black'}}
        height="100%"
        width="100%"
      />
    )
  }
}

const mapState = state => {
  return {
    // hamsterId: state.hamster.selectedHamster.id,
  }
}

const mapDispatch = dispatch => {
  return {
    // getWeights: (hamsterId) => dispatch(getWeights(hamsterId)),
  }
}

export default connect(mapState, mapDispatch)(WeightGraph)
