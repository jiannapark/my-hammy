import axios from 'axios'

const GET_HAMSTERS = 'GET_HAMSTERS'
const GET_SINGLE_HAMSTER = 'GET_SINGLE_HAMSTER'
const ADD_HAMSTER = 'ADD_HAMSTER'
const UPDATE_HAMSTER = 'UPDATE_HAMSTER'
const REMOVE_HAMSTER = 'REMOVE_HAMSTER'

const initialState = {loading: true, hamsters: [], singleHamster: {}}

export const gotHamsters = hamsters => ({type: GET_HAMSTERS, hamsters})

export const getHamsters = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/hamster/${userId}`)
    dispatch(gotHamsters(res.data || initialState.hamsters))
  } catch (err) {
    console.error('There was a problem fetching hamsters!', err)
  }
}

export const gotSingleHamster = hamster => ({
  type: GET_SINGLE_HAMSTER,
  hamster
})

export const getSingleHamster = hamsterId => async dispatch => {
  try {
    const res = await axios.get(`/api/hamster/:userId/${hamsterId}`)
    dispatch(gotSingleHamster(res.data || initialState.singleHamster))
  } catch (err) {
    console.error('There was a problem fetching a hamster!', err)
  }
}

export const addedHamster = hamster => ({type: ADD_HAMSTER, hamster})

export const addHamster = hamsterInfo => async dispatch => {
  try {
    const res = await axios.post('/api/hamster', hamsterInfo)
    dispatch(addedHamster(res.data))
  } catch (err) {
    console.error('There was a problem creating a new hamster!', err)
  }
}

export const updatedHamster = (hamsterId, updateInfo) => ({
  type: UPDATE_HAMSTER,
  hamsterId,
  updateInfo
})

export const updateHamster = (hamsterId, updateInfo) => async dispatch => {
  try {
    await axios.put(`/api/hamster/${hamsterId}`, updateInfo)
    dispatch(updatedHamster(hamsterId, updateInfo))
  } catch (error) {
    console.error('There was a problem updating a hamster!', error)
  }
}

export const removedHamster = hamsterId => ({type: REMOVE_HAMSTER, hamsterId})

export const removeHamster = hamsterId => async dispatch => {
  try {
    await axios.delete(`/api/hamster/${hamsterId}`)
    dispatch(removedHamster(hamsterId))
  } catch (error) {
    console.error('There was a problem removing a hamster!', error)
  }
}

export default function hamsterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HAMSTERS:
      return {...state, loading: false, hamsters: action.hamsters}
    case GET_SINGLE_HAMSTER:
      return {...state, loading: false, singleHamster: action.hamster}
    case ADD_HAMSTER:
      return {
        ...state,
        loading: false,
        hamsters: [...state.hamsters, action.hamster]
      }
    case UPDATE_HAMSTER:
      return {
        ...state,
        loading: false,
        singleHamster: {},
        hamsters: [...state.hamsters].map(hamster => {
          if (hamster.id === action.hamsterId) {
            return {...hamster, ...action.updateInfo}
          } else {
            return hamster
          }
        })
      }
    case REMOVE_HAMSTER:
      return {
        ...state,
        loading: false,
        hamsters: [...state.hamsters].filter(
          hamster => hamster.id !== action.hamsterId
        )
      }
    default:
      return state
  }
}
