import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getSingleHamster} from '../store/hamster'

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
        <img src={hamster.imageUrl} width="400" />
        <h5>Species: {hamster.species}</h5>
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
