import React, {Component} from 'react';
import '../components/App.css';
import UsersList from './UsersList';
import ButtonFetchUsers from './ButtonFetchUsers';

const API =  "https://randomuser.me/api/?results=1"

class App extends Component {

  state = {
    users: []
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
      //pobranie uztkownika
      const user = data.results;

      console.log( data);
      this.setState(prevState => ({
        users: prevState.users.concat(user)
      }))
    })

    .catch(error => console.log(error + " cos nie tak"))

  }

  render() {
    const users = this.state.users;
  return (
    <div>
      <ButtonFetchUsers click={this.handleDataFetch}/>
      {users.length>0 ? <UsersList users={users}/> : users}
    </div>
  );
}
}

export default App;
