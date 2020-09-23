import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getItems} from '../store/environment'

export class Environment extends React.Component {
  componentDidMount() {
    this.props.getItems(this.props.hamster.id)
  }

  render() {
    const {items} = this.props

    return (
      <div className="section">
        <div className="title is-4">Add Environment Item</div>
        {items.map(item => (
          <div key={item.id}>
            <h5>{item.brand}</h5>
            <h4>{item.name}</h4>
            <img src={item.imageUrl} alt={item.name} width="200" />
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    hamster: state.hamster.selectedHamster,
    items: state.environment.items
  }
}

const mapDispatch = dispatch => {
  return {
    getItems: hamsterId => dispatch(getItems(hamsterId))
  }
}

export default connect(mapState, mapDispatch)(Environment)
