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

    const items = allFood.map(food => `${food.brand} ${food.name}`).sort()
    // const names = Array.from(new Set(allFood.map((food) => food.name))).sort()

    return (
      <div>
        {records.map(record => (
          <div key={record.id}>
            <h4>{record.data}</h4>
          </div>
        ))}

        <form onSubmit={this.handleSubmit}>
          <div>
            {/* bug: no change on change */}
            <label htmlFor="datetime">
              <small>Time</small>
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
            <label htmlFor="item">
              <small>Item</small>
            </label>
            <input
              list="items"
              name="item"
              id="item"
              placeholder="Essentials Hamster & Gerbil Food"
            />
            <datalist id="items">
              {items.map(item => (
                <option
                  id="name"
                  key={item}
                  value={item}
                  onChange={this.handleChange}
                >
                  {item}
                </option>
              ))}
            </datalist>
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
