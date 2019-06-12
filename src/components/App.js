import React, {Component} from 'react';
import '../components/App.css';
import UsersList from './UsersList';
import ButtonFetchUsers from './ButtonFetchUsers';

const API =  "https://randomuser.me/api/?results=2"

class App extends Component {

  state = {
    users: null
  }

  handleDataFetch = () => {
    fetch(API)
    .then(response => {
      if(response.ok) {
        console.log(response)
        return response;
      }
      throw Error("Blad")
    })
    .then(response => response.json())
    .then(data => {
      console.log( data);
      this.setState({
        users: data.results
      })
    } )

    .catch(error => console.log(error + " cos nie tak"))

  }

  render() {
    const users = this.state.users;
  return (
    <div>
      <ButtonFetchUsers click={this.handleDataFetch}/>
      {users? <UsersList users={users}/> : users}
    </div>
  );
}
}

export default App;
