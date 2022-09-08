import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      users: undefined
    }
  }

  fetchUser = async () => {
      this.setState({loading:true}, 
        async () => {
          const api = await fetch('https://api.randomuser.me/');
            const data = await api.json();
            console.log('mount:', this.state)
            this.setState({
              loading: false,
              users: data.results
            })
        })  
    }

  async componentDidMount() {
    this.fetchUser()
  }

  renderPage = ({users, loading}) => {
    if(loading) return <p>...loading</p>
    const user = users[0]
    return (
      <div>
        <img src={user.picture.large} alt={user.email}></img>
        <p>{user.name.first} {user.name.last}</p>
        <p>{user.gender}</p>
        <p>{user.email}</p>
        <p>{user.dob.age}</p>
      </div>
    )
  }

  render() {
    console.log('render:', this.state)
    return (
      <main>
        {this.renderPage(this.state)}
      </main>
    )
  }
}

export default App;
