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

  render() {
    const {allFood, records} = this.props

    // const foodItems = allFood.map((food) => `${food.brand} ${food.name}`).sort()
    // const names = Array.from(new Set(allFood.map((food) => food.name))).sort()

    return (
      <div>
        <div>
          <h3>Add New Record</h3>
          <TrackerForm
            foodItems={allFood}
            recordInfo={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        {records.map(record => (
          <div key={record.id}>
            <h4>{record.data}</h4>
          </div>
        ))}
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
