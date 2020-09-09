import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
  getRecords,
  addRecord,
  updateRecord,
  removeRecord
} from '../store/tracker'

const TrackerList = props => {
  const {
    records,
    getRecords,
    addRecord,
    updateRecord,
    removeRecord,
    handleSubmit
  } = props

  return (
    <div>
      {records.map(record => (
        <div key={record.id}>
          <h4>{record.data}</h4>
        </div>
      ))}

      {/* Select Type - Brand - Name */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">
            <small>Type</small>
          </label>
          <input name="type" type="" />
        </div>
        <div>
          <label htmlFor="brand">
            <small>Brand</small>
          </label>
          <input name="brand" type="" />
        </div>
        <div>
          <label htmlFor="name">
            <small>Name</small>
          </label>
          <input name="name" type="" />
        </div>
        <div>{/* quantity */}</div>
        <div>{/* time/date */}</div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">{displayName} with Google</a>
    </div>
  )
}

const mapState = state => {
  return {
    records: state.tracker.records
  }
}

const mapDispatch = dispatch => {
  return {
    getRecords: hamsterId => dispatch(getRecords(hamsterId)),
    addRecord: (hamsterId, recordInfo) =>
      dispatch(addRecord(hamsterId, recordInfo)),
    updateRecord: (recordId, updateInfo) =>
      dispatch(updateRecord(recordId, updateInfo)),
    removeRecord: recordId => dispatch(removeRecord(recordId)),

    handleSubmit(evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export default connect(mapState, mapDispatch)(TrackerList)

TrackerList.propTypes = {
  // name: PropTypes.string.isRequired,
  // displayName: PropTypes.string.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
  // error: PropTypes.object
}
