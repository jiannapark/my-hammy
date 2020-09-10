import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getSingleHamster} from '../store/hamster'
import {Tracker} from './index'

export class Hamster extends React.Component {
  componentDidMount() {
    this.props.getSingleHamster(this.props.match.params.id)
  }

  render() {
    const {hamster} = this.props

    return (
      <div>
        <h3>{hamster.name}</h3>
        {/* TODO: imageUrl as absolute path */}
        <img src="/images/apple-slice-2.jpg" width="400" />
        <h5>Species: {hamster.species}</h5>

        {/* Environment, Nutrition Tracker & Diary */}
        <Tracker hamster={hamster} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    hamster: state.hamster.selectedHamster
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleHamster: hamsterId => dispatch(getSingleHamster(hamsterId))
  }
}

export default connect(mapState, mapDispatch)(Hamster)
