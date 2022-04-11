import React from 'react';
import France from './France'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      winner: '',
      favorite: '',
      france: 'false'
    }
  }``

  handleChange = ({ target }) => {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  render() {

    return(
      <form>
        <fieldset>
          <label>
            Qual seu time de Rugby Favorito?
            <select name="favorite" id="favorite" onChange={this.handleChange} value={this.state.teams}>
              <option value="empty">-</option>
              <option value="Brumbies">Brumbies</option>
              <option value="Crusaders">Crusaders</option>
            </select>
          </label>
          <br/>
          <label>
          Quem vai ganhar a Copa do Mundo de Rugby em 2023?
          <textarea name="winner" onChange={this.handleChange} value={this.state.winner}></textarea>
          </label>
          <br/>
          <France handleChange={this.handleChange} value={this.state.france} />
          <br/> 
          <label>Inclua seu meme favorito:
            <input type="file"></input>
          </label>
        </fieldset>
      </form>
    )
  }
}

export default Form