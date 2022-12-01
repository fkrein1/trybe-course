import React from 'react'
import PersonalForm from './PersonalForm'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      taxId: '',
      adress: '',
      city: '',
      uf: '',
      type: '',
      coverLetter: '',
      jobTitle: '',
      jobDescription: ''
    }
  }

handleChange = ({ target }) => {
  const { name } = target
  let value = target.type === 'checkbox' ? target.checked : target.value
  if (name === 'name') value = value.toUpperCase()
  if (name === 'adress') value = value.replace(/[^\w\s]/gi, '')
  this.setState({
    [name]: value
  })
}

checkCity = ({ target }) => {
  const { name, value } = target
  if (!isNaN(value.substr(0, 1))) {
    this.setState({
      [name]: ''
    })
  }
}

  render() {
    return(
      <form>
        <PersonalForm 
          handleChange={this.handleChange} 
          name={this.state.name} 
          email={this.state.email} 
          taxId={this.state.taxId} 
          adress={this.state.adress}
          city={this.state.city}
          checkCity={this.checkCity}/>
      </form>
    )
  }
}

export default Form