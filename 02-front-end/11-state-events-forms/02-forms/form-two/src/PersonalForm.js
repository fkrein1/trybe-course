import React from 'react'

class PersonalForm extends React.Component {
  render() {
    const { handleChange, name, email, taxId, adress, city, checkCity } = this.props
    return(
      <fieldset>
        <label>Nome:
          <input 
            name="name"
            type="text"
            maxLength={40}
            onChange={handleChange}
            value={name}>
          </input>
        </label>
        <label>Email:
        <input 
          name="email"
          type="text"
          maxLength={50}
          onChange={handleChange}
          value={email}>
        </input>
      </label> 
      <label>CPF:
      <input 
        name="taxId"
        type="text"
        maxLength={11}
        onChange={handleChange}
        value={taxId}>
      </input>
    </label> 
    <label>Adress:
    <input 
      name="adress"
      type="text"
      maxLength={200}
      onChange={handleChange}
      value={adress}>
    </input>
  </label> 
  <label>Cidade:
  <input 
    name="city"
    type="text"
    maxLength={28}
    onChange={handleChange}
    onBlur={checkCity}
    value={city}>
  </input>
</label> 
      </fieldset>
    )
  }
}

export default PersonalForm