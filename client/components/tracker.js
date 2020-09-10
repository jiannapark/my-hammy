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
    this.state = {
      type: '',
      brand: '',
      name: '',
      quantity: 0,
      datetime: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleARemove = this.handleRemove.bind(this)
  }

  componentDidMount() {
    this.props.getRecords()
    this.props.getAllFood()
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    const hamster = this.props.hamster
    evt.preventDefault()
    // bug: error adding a new record
    this.props.addRecord(hamster.id, {...this.state, hamsterId: hamster.id})
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
    const {type, brand, name, quantity, datetime} = this.state

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
            <select required name="type">
              {foodTypes.map(foodType => (
                <option
                  id="type"
                  key={foodType}
                  value={foodType}
                  onChange={this.handleChange}
                >
                  {foodType}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="brand">
              <small>Brand</small>
            </label>
            <select required name="brand">
              {brands.map(brand => (
                <option
                  id="brand"
                  key={brand}
                  value={brand}
                  onChange={this.handleChange}
                >
                  {brand}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="name">
              <small>Name</small>
            </label>
            <select required name="name">
              {names.map(name => (
                <option
                  id="name"
                  key={name}
                  value={name}
                  onChange={this.handleChange}
                >
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="quantity">
              <small>Quantity</small>
            </label>
            <input
              required
              type="number"
              id="quantity"
              name="quantity"
              onChange={this.handleChange}
              value={quantity}
              min="0"
              step=".01"
              placeholder="0"
            />
          </div>
          <div>
            {/* bug: no change on change */}
            <label htmlFor="datetime">
              <small>Feeding Time</small>
            </label>
            <input
              required
              type="datetime-local"
              id="datetime"
              name="datetime"
              onChange={this.handleChange}
              value="2020-09-10T19:30"
              min="2018-06-07T00:00"
              max="2025-06-14T00:00"
            />
          </div>
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
