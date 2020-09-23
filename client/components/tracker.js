import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getAllFood} from '../store/food'
import {addRecord, updateRecord, removeRecord} from '../store/tracker'
import {TrackerForm} from './index'

export class TrackerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datetime: '',
      foodId: null,
      quantity: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getAllFood()
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const hamster = this.props.hamster
    this.props.addRecord(hamster.id, {...this.state, hamsterId: hamster.id})
    this.setState({
      datetime: '',
      foodId: null,
      quantity: 0
    })
  }

  render() {
    const {allFood, records, removeRecord} = this.props

    return (
      <div className="section">
        <div className="container">
          <div className="title is-4">Add New Record</div>
          <TrackerForm
            foodItems={allFood}
            recordInfo={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div className="container">
          {records.map(record => {
            const food = record.food
            const unit =
              parseFloat(record.quantity) > 1
                ? food.servingUnit + 's'
                : food.servingUnit
            return (
              <div key={record.id} className="block">
                <h4>When: {record.date}</h4>
                <div>Type: {food.type}</div>
                <div>Brand: {food.brand}</div>
                <div>Name: {food.name}</div>
                <div>
                  Quantity: {record.quantity} {unit}
                </div>
                <button
                  type="button"
                  className="delete"
                  onClick={() => removeRecord(record.id)}
                >
                  Delete
                </button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    hamster: state.hamster.selectedHamster,
    allFood: state.food.allFood
  }
}

const mapDispatch = dispatch => {
  return {
    getAllFood: () => dispatch(getAllFood()),
    addRecord: (hamsterId, recordInfo) =>
      dispatch(addRecord(hamsterId, recordInfo)),
    updateRecord: (recordId, updateInfo) =>
      dispatch(updateRecord(recordId, updateInfo)),
    removeRecord: recordId => dispatch(removeRecord(recordId))
  }
}

export default connect(mapState, mapDispatch)(TrackerList)

TrackerList.propTypes = {
  // name: PropTypes.string.isRequired,
  // displayName: PropTypes.string.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
  // error: PropTypes.object
}
