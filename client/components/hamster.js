import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
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
      <div className="section">
        <div className="title is-3">{hamster.name}</div>
        {/* TODO: imageUrl as absolute path */}
        <img src="/images/apple-slice-2.jpg" width="400" />

        {/* Current environment, Nutrition Tracker & Diary & Media in Tabs */}
        <div className="tabs is-centered">
          <ul>
            <li>Currently Using</li>
            <li>Food Tracker</li>
            <li>
              <Link to={`/hamster/${hamster.id}/diary`}>Diary</Link>
            </li>
            <li>Photo Album</li>
          </ul>
        </div>

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
