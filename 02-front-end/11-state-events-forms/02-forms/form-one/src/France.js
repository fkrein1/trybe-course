import React from 'react'

class France extends React.Component {
  render() {
    const { value, handleChange } = this.props
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