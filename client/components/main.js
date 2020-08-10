import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onClick = () => {
    history.push(`/${value}`)
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-black font-bold rounded-lg border shadow-lg p-10">
          <input value={value} onChange={onChange} className="mr-3" type="text" id="input-field" />
          <button
            className="bg-indigo-400 text-white font-bold rounded-lg shadow-lg p-1"
            type="button"
            id="search-button"
            onClick={onClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
