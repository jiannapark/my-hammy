import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getAllFood} from '../store/food'

export class Food extends React.Component {
  componentDidMount() {
    this.props.getAllFood()
  }

  render() {
    const {allFood} = this.props

    return (
      <div>
        {allFood.map(food => (
          <div key={food.id}>
            <h4>{food.brand}</h4>
            <h5>{food.name}</h5>
            <h6>Type: {food.type}</h6>
            <img src={food.imageUrl} alt={food.name} width="200" />
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    allFood: state.food.allFood
  }
}

const mapDispatch = dispatch => {
  return {
    getAllFood: () => dispatch(getAllFood())
  }
}

export default connect(mapState, mapDispatch)(Food)
