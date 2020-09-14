import axios from 'axios'

const GET_ITEMS = 'GET_ITEMS'
const GET_SINGLE_ITEM = 'GET_SINGLE_ITEM'
const ADD_ITEM = 'ADD_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

const initialState = {loading: true, items: [], selectedItem: {}}

export const gotItems = items => ({type: GET_ITEMS, items})

export const getItems = hamsterId => async dispatch => {
  try {
    let res
    if (hamsterId) {
      res = await axios.get(`/api/environment/${hamsterId}`)
    } else {
      res = await axios.get('/api/environment')
    }
    dispatch(gotItems(res.data || initialState.items))
  } catch (err) {
    console.error('There was a problem fetching items!', err)
  }
}

export const gotSingleItem = item => ({type: GET_SINGLE_ITEM, item})

export const getSingleItem = itemId => async dispatch => {
  try {
    const res = await axios.get(`/api/environment/single/${itemId}`)
    dispatch(gotSingleItem(res.data || initialState.selectedItem))
  } catch (err) {
    console.error('There was a problem fetching single item!', err)
  }
}

export const addedItem = item => ({type: ADD_ITEM, item})

export const addItem = (hamsterId, itemInfo) => async dispatch => {
  try {
    const res = await axios.post(`/api/environment/${hamsterId}`, itemInfo)
    dispatch(addedItem(res.data))
  } catch (err) {
    console.error('There was a problem creating a new item!', err)
  }
}

export const updatedItem = (itemId, updateInfo) => ({
  type: UPDATE_ITEM,
  itemId,
  updateInfo
})

export const updateItem = (itemId, updateInfo) => async dispatch => {
  try {
    await axios.put(`/api/environment/${itemId}`, updateInfo)
    dispatch(updatedItem(itemId, updateInfo))
  } catch (error) {
    console.error('There was a problem updating an item!', error)
  }
}

export const removedItem = itemId => ({type: REMOVE_ITEM, itemId})

export const removeItem = itemId => async dispatch => {
  try {
    await axios.delete(`/api/environment/${itemId}`)
    dispatch(removedItem(itemId))
  } catch (error) {
    console.error('There was a problem removing an item!', error)
  }
}

export default function environmentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {...state, loading: false, items: action.items}
    case GET_SINGLE_ITEM:
      return {...state, loading: false, selectedItem: action.selectedItem}
    case ADD_ITEM:
      return {
        ...state,
        loading: false,
        items: [...state.items, action.item]
      }
    case UPDATE_ITEM:
      return {
        ...state,
        loading: false,
        selectedItem: {...state.selectedItem, ...action.updateInfo},
        items: [...state.items].map(item => {
          if (item.id === action.itemId) {
            return {...item, ...action.updateInfo}
          } else {
            return item
          }
        })
      }
    case REMOVE_ITEM:
      return {
        ...state,
        loading: false,
        items: [...state.items].filter(item => item.id !== action.itemId)
      }
    default:
      return state
  }
}
