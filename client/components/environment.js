import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getItems} from '../store/environment'

export class Environment extends React.Component {
  componentDidMount() {
    // TODO: enable get all items without id
    this.props.getItems(this.props.hamster.id)
  }

  render() {
    const {items} = this.props

    return (
      <div>
        {items.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <h5>{item.brand}</h5>
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
