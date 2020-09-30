import axios from 'axios'

const GET_ENTRIES = 'GET_ENTRIES'
const GET_SINGLE_ENTRY = 'GET_SINGLE_ENTRY'
const GET_WEIGHT = 'GET_WEIGHT'
const ADD_ENTRY = 'ADD_ENTRY'
const UPDATE_ENTRY = 'UPDATE_ENTRY'
const REMOVE_ENTRY = 'REMOVE_ENTRY'

const initialState = {
  loading: true,
  entries: [],
  selectedEntry: {},
  weights: []
}

export const gotEntries = entries => ({type: GET_ENTRIES, entries})

export const getEntries = hamsterId => async dispatch => {
  try {
    const res = await axios.get(`/api/diary/${hamsterId}`)
    dispatch(gotEntries(res.data || initialState.entries))
  } catch (err) {
    console.error('There was a problem fetching diary entries!', err)
  }
}

export const gotSingleEntry = entry => ({type: GET_SINGLE_ENTRY, entry})

export const getSingleEntry = entryId => async dispatch => {
  try {
    const res = await axios.get(`/api/diary/single/${entryId}`)
    dispatch(gotSingleEntry(res.data || initialState.selectedEntry))
  } catch (err) {
    console.error('There was a problem fetching single diary entry!', err)
  }
}

export const gotWeights = weights => ({type: GET_WEIGHT, weights})

export const getWeights = hamsterId => async dispatch => {
  try {
    // if this thunk is never called (i.e. user does not select a single hamster) and user goes to dashboard, state.diary.weights is empty and can't be passed down onComponentMount in weight-graph --> save hamsterId 1's weights in localStorage from the start of the app, and change if selected hamster changes
    hamsterId = hamsterId ? hamsterId : 1
    const res = await axios.get(`/api/diary/${hamsterId}/weight`)
    window.localStorage.setItem('weightsData', JSON.stringify(res.data))
    dispatch(gotWeights(res.data || initialState.entries))
  } catch (err) {
    console.error('There was a problem fetching weights!', err)
  }
}

export const addedEntry = newEntry => ({type: ADD_ENTRY, newEntry})

export const addEntry = (hamsterId, entryInfo) => async dispatch => {
  try {
    const res = await axios.post(`/api/diary/${hamsterId}`, entryInfo)
    dispatch(addedEntry(res.data))
  } catch (err) {
    console.error('There was a problem creating a new diary entry!', err)
  }
}

export const updatedEntry = (entryId, updateInfo) => ({
  type: UPDATE_ENTRY,
  entryId,
  updateInfo
})

export const updateEntry = (entryId, updateInfo) => async dispatch => {
  try {
    await axios.put(`/api/diary/${entryId}`, updateInfo)
    dispatch(updatedEntry(entryId, updateInfo))
  } catch (error) {
    console.error('There was a problem updating a diary entry!', error)
  }
}

export const removedEntry = entryId => ({type: REMOVE_ENTRY, entryId})

export const removeEntry = entryId => async dispatch => {
  try {
    await axios.delete(`/api/diary/${entryId}`)
    dispatch(removedEntry(entryId))
  } catch (error) {
    console.error('There was a problem removing a diary entry!', error)
  }
}

export default function diaryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ENTRIES:
      return {...state, loading: false, entries: action.entries}
    case GET_SINGLE_ENTRY:
      return {...state, loading: false, selectedEntry: action.entry}
    case GET_WEIGHT:
      return {...state, loading: false, weights: action.weights}
    case ADD_ENTRY:
      return {
        ...state,
        loading: false,
        entries: [...state.entries, action.newEntry]
      }
    case UPDATE_ENTRY:
      return {
        ...state,
        loading: false,
        selectedEntry: {...state.selectedEntry, ...action.updateInfo},
        entries: [...state.entries].map(entry => {
          if (entry.id === action.entryId) {
            return {...entry, ...action.updateInfo}
          } else {
            return entry
          }
        })
      }
    case REMOVE_ENTRY:
      return {
        ...state,
        loading: false,
        entries: [...state.entries].filter(entry => entry.id !== action.entryId)
      }
    default:
      return state
  }
}
