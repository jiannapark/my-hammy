import React from 'react'
import {connect} from 'react-redux'
import {getWeights} from '../store/diary'

export class WeightGraph extends React.Component {
  componentDidMount() {
    this.props.getWeights(this.props.hamsterId)
    // const hamsterId = this.props.match.params.id
  }

  render() {
    const {weights} = this.props

    return <div>{weights}</div>
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
