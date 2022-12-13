import React from 'react'

const InputGroup = ({ totalEpisode, setID, name }) => {
  const arrKeysEpisode = [...Array(totalEpisode).keys()];
 
  

  const handleEpisodeChange = (e) => {
    setID(e.target.value)
  }

  return (
    <div className="input-group mb-3 mt-2">
      <select className="form-select" id={name} onChange={handleEpisodeChange} defaultValue={1}>
        {arrKeysEpisode.map((item, index) => {
          return (
            <option key={index} value={item + 1}>
              {name}-{item + 1}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default InputGroup