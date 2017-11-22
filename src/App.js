import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/contactsAPI';

class App extends Component {
  state = {
    contacts : [],
    screen: "list"
  }
  componentDidMount(){
    ContactsAPI.getAll().then((allContactsFetched) => {
      this.setState({contacts: allContactsFetched})
    });
  }

  deleteContact = (contactClicked) => {
    this.setState((prevState) => 
        ({contacts : this.state.contacts.filter((contact) => 
        contact.id !== contactClicked.id)
       }))
  }

  navigateToCreateContact = () => {
    this.setState({screen:"create"});
  }

  render(){
    return (
          <div>
          {this.state.screen === "list" && (
            <ListContacts onDeleteContact={this.deleteContact} contacts={this.state.contacts} onCreateContact={this.navigateToCreateContact}/>
          )}
          {this.state.screen === "create" && (
            <CreateContact />
          )}
           </div>
           )
  }
}

export default App;