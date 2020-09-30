import React from 'react'
import {connect} from 'react-redux'
// import {getWeights} from '../store/diary'
import lineChart from '../charts/line-chart'

export class WeightGraph extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     weightsData: [],
  //   }
  // }

  componentDidMount() {
    const weightsData = JSON.parse(window.localStorage.getItem('weightsData'))
    // this.setState({weightsData: weightsData})
    lineChart.initializeChart(weightsData)
  }

  componentDidUpdate() {
    // lineChart.initializeChart(this.state.weightsData)
  }

  render() {
    // const {weightsData} = this.state
    // const dateArray = weightsData.map(
    // (weight) =>
    // moment(weight.date).format('MM-DD')
    //     weight.date
    // )
    // const weightArray = weightsData.map((weight) => weight.weight)

    return (
      <svg id="weight-chart" style={{border: '1px solid black'}} width="100%" />
    )
    // return weightsData.map((weight) => (
    //   <div key={weight.date}>
    //     <svg
    //       viewBox="0 0 100 50"
    //       id="weight-chart"
    //       style={{border: '1px solid black'}}
    //       width="100%"
    //     />
    //     {/* <button
    //       type="button"
    //       onClick={() => lineChart.initializeChart(weights)}
    //     >
    //       Draw chart
    //     </button> */}

    //     {/* <div>Date: {moment(weight.date).format('MM-DD-YYYY')}</div>
    //     <div>Weight: {weight.weight}</div> */}
    //   </div>
    // ))
  }
}

const mapState = state => {
  return {
    hamsterId: state.hamster.selectedHamster.id
    // weights: state.diary.weights,
  }
}

const mapDispatch = dispatch => {
  return {
    // getWeights: (hamsterId) => dispatch(getWeights(hamsterId)),
  }
}

export default connect(mapState, mapDispatch)(WeightGraph)
