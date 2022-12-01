import React from 'react'

class France extends React.Component {
  render() {
    const { value, handleChange } = this.props
    value = value.substr(0,39)
    return (
      <label>França vai ganhar?
      <input 
        type="checkbox" 
        name="france" 
        onChange={handleChange} 
        value={value}>
      </input>
    </label>
    )
  }
}

export default France