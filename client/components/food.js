import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getAllFood, addFood, updateFood, removeFood} from '../store/food'
import {FoodForm} from './index'

export class Food extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      brand: '',
      name: '',
      imageUrl: '',
      servingSizeMax: 0,
      servingUnit: '',
      frequency: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getAllFood()
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addFood(this.state)
    this.setState({
      type: '',
      brand: '',
      name: '',
      imageUrl: '',
      servingSizeMax: 0,
      servingUnit: '',
      frequency: ''
    })
  }

  render() {
    const {allFood} = this.props
    const foodInfo = this.state

    return (
      <div className="section">
        <div className="title is-4">Add Food Item</div>
        <FoodForm
          foodInfo={foodInfo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div>
          {allFood.map(food => (
            <div key={food.id}>
              <h4>{food.brand}</h4>
              <h5>{food.name}</h5>
              <h6>Type: {food.type}</h6>
              <img src={food.imageUrl} alt={food.name} width="200" />
              <button
                type="button"
                className="button is-light is-small"
                onClick={() => this.props.removeFood(food.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
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
    getAllFood: () => dispatch(getAllFood()),
    addFood: foodInfo => dispatch(addFood(foodInfo)),
    updateFood: (foodId, updateInfo) =>
      dispatch(updateFood(foodId, updateInfo)),
    removeFood: foodId => dispatch(removeFood(foodId))
  }
}

export default connect(mapState, mapDispatch)(Food)
