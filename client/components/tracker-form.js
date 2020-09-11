import React from 'react'
import Select from 'react-select'

export const TrackerForm = props => {
  const {foodItems, recordInfo, handleChange, handleSubmit} = props
  const {datetime, foodId, quantity} = recordInfo

  const foodItemOptions = foodItems.map(item => ({
    value: item.id,
    label: item.brand + ' ' + item.name
  }))

  return (
    <form onSubmit={handleSubmit}>
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
          value={datetime}
          onChange={handleChange}
          min="2018-06-07T00:00"
          max="2025-06-14T00:00"
        />
      </div>
      <div style={{display: 'block', width: '80%'}}>
        <label htmlFor="item">
          <small>Item</small>
        </label>
        <Select name="item" onChange={handleChange} options={foodItemOptions} />
        {/* <select
          className="search-select"
          name="item"
          onChange={handleChange}
          // placeholder="Select..."
        >
          {foodItems.map((item) => (
            <option id="item" key={item.id} value={item.id}>
              {`${item.brand} ${item.name}`}
            </option>
          ))}
        </select> */}
        {/* <input
          list="items"
          name="item"
          id="item"
          onChange={handleChange}
          placeholder="Select..."
        />
        <datalist id="items">
          {foodItems.map((item) => (
            <option id="item" key={item.id} value={item.id}>
              {`${item.brand} ${item.name}`}
            </option>
          ))}
        </datalist> */}
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
          value={quantity}
          onChange={handleChange}
          min="0"
          step=".01"
          placeholder="0"
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default TrackerForm
