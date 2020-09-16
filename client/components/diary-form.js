import React from 'react'

export const DiaryForm = props => {
  const {entryInfo, handleChange, handleSubmit} = props
  const {date, content, weight} = entryInfo
  const weathers = [
    'Sunny',
    'Partially sunny',
    'Cloudy',
    'Rainy',
    'Windy',
    'Foggy',
    'Snowy'
  ]

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">
          <small>Date</small>
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleChange}
          // min="2018-06-07T00:00"
          // max="2025-06-14T00:00"
        />
      </div>
      <div>
        <label htmlFor="weather">
          <small>Weather</small>
        </label>
        <select name="weather" onChange={handleChange} placeholder="Select...">
          {weathers.map((weather, i) => (
            <option id={i} key={weather} value={weather}>
              {weather}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="content">
          <small>Content</small>
        </label>
        <textarea
          rows="4"
          cols="50"
          id="content"
          name="content"
          value={content}
          onChange={handleChange}
          placeholder="How was your day?"
        />
      </div>
      <div>
        <label htmlFor="weight">
          <small>Weight (g)</small>
        </label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={weight}
          onChange={handleChange}
          min="1"
          step="1"
          placeholder="30"
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default DiaryForm
