import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getEntries, addEntry, updateEntry, removeEntry} from '../store/diary'
import {DiaryForm} from './index'

export class Diary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      weather: '',
      content: '',
      weight: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getEntries(this.props.match.params.id)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const hamster = this.props.hamster
    this.props.addEntry(hamster.id, {...this.state, hamsterId: hamster.id})
    this.setState({
      date: '',
      weather: '',
      content: '',
      weight: 0
    })
  }

  render() {
    const {entries, removeEntry} = this.props

    return (
      <div>
        <div>
          <h3>Add New Entry</h3>
          <DiaryForm
            entryInfo={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        {entries.map(entry => (
          <div key={entry.id}>
            <h4>Date: {entry.date}</h4>
            <div>Weather: {entry.weather}</div>
            <div>Content: {entry.content}</div>
            <div>Weight: {entry.weight}g</div>
            <button type="button" onClick={() => removeEntry(entry.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    hamster: state.hamster.selectedHamster,
    entries: state.diary.entries
  }
}

const mapDispatch = dispatch => {
  return {
    getEntries: hamsterId => dispatch(getEntries(hamsterId)),
    addEntry: (hamsterId, entryInfo) =>
      dispatch(addEntry(hamsterId, entryInfo)),
    updateEntry: (entryId, updateInfo) =>
      dispatch(updateEntry(entryId, updateInfo)),
    removeEntry: entryId => dispatch(removeEntry(entryId))
  }
}

export default connect(mapState, mapDispatch)(Diary)
