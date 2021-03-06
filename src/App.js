import React, { Component } from 'react';
import ListContacts from './ListContacts';



class App extends Component{
  state = {
    contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      }, 
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }
  deleteContact = (contactClicked) => {
    this.setState((prevState) => 
        ({contacts : this.state.contacts.filter((contact) => 
        contact.id !== contactClicked.id)
       }))
  }

  render(){
    return <div>
            <ListContacts onDeleteContact={this.deleteContact} contacts={this.state.contacts} />
           </div>
  }

}

export default App;