import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getSingleHamster} from '../store/hamster'
import {Tracker} from './index'
import {getRecords} from '../store/tracker'

export class Hamster extends React.Component {
  componentDidMount() {
    const hamsterId = this.props.match.params.id
    this.props.getSingleHamster(hamsterId)
    this.props.getRecords(hamsterId)
  }

  render() {
    const {hamster, records} = this.props

    return (
      <div>
        <h3>{hamster.name}</h3>
        {/* TODO: imageUrl as absolute path */}
        <img src="/images/apple-slice-2.jpg" width="400" />
        <h5>Species: {hamster.species}</h5>

        {/* Environment, Nutrition Tracker & Diary */}
        <Tracker records={records} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    hamster: state.hamster.selectedHamster,
    records: state.tracker.records
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleHamster: hamsterId => dispatch(getSingleHamster(hamsterId)),
    getRecords: hamsterId => dispatch(getRecords(hamsterId))
  }
}

export default connect(mapState, mapDispatch)(Hamster)
