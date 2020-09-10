import React from 'react'

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
const servingUnits = ['cup', 'tablespoon', 'teaspoon', 'piece']
const frequencies = [
  'Daily',
  'Every 1-2 days',
  'Every 2-3 days',
  'Weekly',
  'Bi-weekly',
  'Every 1-2 weeks',
  '1-2 times a week',
  '2 times a week',
  '2-3 times a week',
  'Monthly',
  '1-2 times a month'
]

export const FoodForm = props => {
  const {foodInfo, handleChange, handleSubmit} = props
  const {brand, name, imageUrl, servingSizeMax} = foodInfo

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="type">
          <small>Type</small>
        </label>
        <input
          list="types"
          name="type"
          id="type"
          onChange={handleChange}
          placeholder="Select..."
        />
        <datalist id="types">
          {foodTypes.map(foodType => (
            <option id="type" key={foodType} value={foodType}>
              {foodType}
            </option>
          ))}
        </datalist>
      </div>
      <div>
        <label htmlFor="brand">
          <small>Brand</small>
        </label>
        <input
          type="text"
          name="brand"
          id="brand"
          value={brand}
          onChange={handleChange}
          placeholder="Enter brand name"
        />
      </div>
      <div>
        <label htmlFor="name">
          <small>Name</small>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter new food item"
        />
      </div>
      <div>
        {/* TODO: enable upload file */}
        <label htmlFor="imageUrl">
          <small>Image URL</small>
        </label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          value={imageUrl}
          onChange={handleChange}
          placeholder="Enter image address"
        />
      </div>
      <div>
        <label htmlFor="servingSizeMax">
          <small>Serving Size (Max.)</small>
        </label>
        <input
          type="number"
          name="servingSizeMax"
          id="servingSizeMax"
          value={servingSizeMax}
          onChange={handleChange}
          min="0"
          step=".01"
          placeholder="0"
        />
      </div>
      <div>
        <label htmlFor="servingUnit">
          <small>Serving Unit</small>
        </label>
        <input
          list="servingUnits"
          name="servingUnit"
          id="servingUnit"
          onChange={handleChange}
          placeholder="Select..."
        />
        <datalist id="servingUnits">
          {servingUnits.map(unit => (
            <option id="servingUnit" key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </datalist>
      </div>
      <div>
        <label htmlFor="frequency">
          <small>Serving Frequency</small>
        </label>
        <input
          list="frequencies"
          name="frequency"
          id="frequency"
          onChange={handleChange}
          placeholder="Select..."
        />
        <datalist id="frequencies">
          {frequencies.map(frequency => (
            <option id="frequency" key={frequency} value={frequency}>
              {frequency}
            </option>
          ))}
        </datalist>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default FoodForm
