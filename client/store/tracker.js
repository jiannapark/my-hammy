import axios from 'axios'

const GET_RECORDS = 'GET_RECORDS'
const GET_SINGLE_RECORD = 'GET_SINGLE_RECORD'
const ADD_RECORD = 'ADD_RECORD'
const UPDATE_RECORD = 'UPDATE_RECORD'
const REMOVE_RECORD = 'REMOVE_RECORD'

const initialState = {loading: true, records: [], selectedRecord: {}}

export const gotRecords = records => ({type: GET_RECORDS, records})

export const getRecords = hamsterId => async dispatch => {
  try {
    const res = await axios.get(`/api/tracker/${hamsterId}`)
    dispatch(gotRecords(res.data || initialState.records))
  } catch (err) {
    console.error('There was a problem fetching records!', err)
  }
}

export const gotSingleRecord = record => ({type: GET_SINGLE_RECORD, record})

export const getSingleRecord = recordId => async dispatch => {
  try {
    const res = await axios.get(`/api/tracker/single/${recordId}`)
    dispatch(gotSingleRecord(res.data || initialState.selectedRecord))
  } catch (err) {
    console.error('There was a problem fetching single record!', err)
  }
}

export const addedRecord = newRecord => ({type: ADD_RECORD, newRecord})

export const addRecord = (hamsterId, recordInfo) => async dispatch => {
  try {
    const res = await axios.post(`/api/tracker/${hamsterId}`, recordInfo)
    dispatch(addedRecord(res.data))
  } catch (err) {
    console.error('There was a problem creating a new record!', err)
  }
}

export const updatedRecord = (recordId, updateInfo) => ({
  type: UPDATE_RECORD,
  recordId,
  updateInfo
})

export const updateRecord = (recordId, updateInfo) => async dispatch => {
  try {
    await axios.put(`/api/tracker/${recordId}`, updateInfo)
    dispatch(updatedRecord(recordId, updateInfo))
  } catch (error) {
    console.error('There was a problem updating a record!', error)
  }
}

export const removedRecord = recordId => ({type: REMOVE_RECORD, recordId})

export const removeRecord = recordId => async dispatch => {
  try {
    await axios.delete(`/api/tracker/${recordId}`)
    dispatch(removedRecord(recordId))
  } catch (error) {
    console.error('There was a problem removing a record!', error)
  }
}

export default function trackerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECORDS:
      return {...state, loading: false, records: action.records}
    case GET_SINGLE_RECORD:
      return {...state, loading: false, selectedRecord: action.record}
    case ADD_RECORD:
      return {
        ...state,
        loading: false,
        records: [...state.records, action.newRecord]
      }
    case UPDATE_RECORD:
      return {
        ...state,
        loading: false,
        selectedRecord: {...state.selectedRecord, ...action.updateInfo},
        records: [...state.records].map(record => {
          if (record.id === action.recordId) {
            return {...record, ...action.updateInfo}
          } else {
            return record
          }
        })
      }
    case REMOVE_RECORD:
      return {
        ...state,
        loading: false,
        records: [...state.records].filter(
          record => record.id !== action.recordId
        )
      }
    default:
      return state
  }
}
