import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getAllFood} from '../store/food'
import {
  getRecords,
  addRecord,
  updateRecord,
  removeRecord
} from '../store/tracker'

const foodTypes = [
  'Pellet',
  'Vegetable',
  'Fruit',
  'Grain',
  'Legume',
  'Nut',
  'Seed',
  'Protein',
  'Treat',
  'Other'
]

export class TrackerList extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleARemove = this.handleRemove.bind(this)
  }

  componentDidMount() {
    // this.props.getRecords()
    this.props.getAllFood()
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addRecord()
  }

  handleAdd(evt) {
    evt.preventDefault()
    this.props.addRecord()
  }

  handleUpdate(evt) {
    evt.preventDefault()
    this.props.updateRecord()
  }

  handleRemove(evt) {
    evt.preventDefault()
    this.props.removeRecord()
  }

  render() {
    const {allFood, records} = this.props

    const brands = Array.from(new Set(allFood.map(food => food.brand)))
    const names = Array.from(new Set(allFood.map(food => food.name)))

    return (
      <div>
        {records.map(record => (
          <div key={record.id}>
            <h4>{record.data}</h4>
          </div>
        ))}

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="type">
              <small>Type</small>
            </label>
            <select name="type">
              {foodTypes.map(foodType => (
                <option id="type" key={foodType} value={foodType}>
                  {foodType}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="brand">
              <small>Brand</small>
            </label>
            <select name="brand">
              {brands.map(brand => (
                <option id="brand" key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="name">
              <small>Name</small>
            </label>
            <select name="name">
              {names.map(name => (
                <option id="name" key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div>{/* quantity */}</div>
          <div>{/* time/date */}</div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    allFood: state.food.allFood,
    records: state.tracker.records
  }
}

const mapDispatch = dispatch => {
  return {
    getAllFood: () => dispatch(getAllFood()),
    getRecords: hamsterId => dispatch(getRecords(hamsterId)),
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
