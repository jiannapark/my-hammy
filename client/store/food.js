import axios from 'axios'

const GET_ALL_FOOD = 'GET_ALL_FOOD'
const GET_SINGLE_FOOD = 'GET_SINGLE_FOOD'
const ADD_FOOD = 'ADD_FOOD'
const UPDATE_FOOD = 'UPDATE_FOOD'
const REMOVE_FOOD = 'REMOVE_FOOD'

const initialState = {loading: true, allFood: [], selectedFood: {}}

export const gotAllFood = allFood => ({type: GET_ALL_FOOD, allFood})

export const getAllFood = () => async dispatch => {
  try {
    const res = await axios.get('/api/food')
    dispatch(gotAllFood(res.data || initialState.allFood))
  } catch (err) {
    console.error('There was a problem fetching all food items!', err)
  }
}

export const gotSingleFood = selectedFood => ({
  type: GET_SINGLE_FOOD,
  selectedFood
})

export const getSingleFood = foodId => async dispatch => {
  try {
    const res = await axios.get(`/api/food/${foodId}`)
    dispatch(gotSingleFood(res.data || initialState.selectedFood))
  } catch (err) {
    console.error('There was a problem fetching a food item!', err)
  }
}

export const addedFood = newFood => ({type: ADD_FOOD, newFood})

export const addFood = foodInfo => async dispatch => {
  try {
    const res = await axios.post('/api/food', foodInfo)
    dispatch(addedFood(res.data))
  } catch (err) {
    console.error('There was a problem creating a new food item!', err)
  }
}

export const updatedFood = (foodId, updateInfo) => ({
  type: UPDATE_FOOD,
  foodId,
  updateInfo
})

export const updateFood = (foodId, updateInfo) => async dispatch => {
  try {
    await axios.put(`/api/food/${foodId}`, updateInfo)
    dispatch(updatedFood(foodId, updateInfo))
  } catch (error) {
    console.error('There was a problem updating a food item!', error)
  }
}

export const removedFood = foodId => ({type: REMOVE_FOOD, foodId})

export const removeFood = foodId => async dispatch => {
  try {
    await axios.delete(`/api/food/${foodId}`)
    dispatch(removedFood(foodId))
  } catch (error) {
    console.error('There was a problem removing a food item!', error)
  }
}

export default function foodReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_FOOD:
      return {...state, loading: false, allFood: action.allFood}
    case GET_SINGLE_FOOD:
      return {...state, loading: false, selectedFood: action.selectedFood}
    case ADD_FOOD:
      return {
        ...state,
        loading: false,
        allFood: [...state.allFood, action.newFood]
      }
    case UPDATE_FOOD:
      return {
        ...state,
        loading: false,
        selectedFood: {...state.selectedFood, ...action.updateInfo},
        allFood: [...state.allFood].map(food => {
          if (food.id === action.foodId) {
            return {...food, ...action.updateInfo}
          } else {
            return food
          }
        })
      }
    case REMOVE_FOOD:
      return {
        ...state,
        loading: false,
        allFood: [...state.allFood].filter(food => food.id !== action.foodId)
      }
    default:
      return state
  }
}
