import React, {Component} from 'react';
import PropTypes from "prop-types";
import escapeStringRegexp from "escape-string-regexp";
import sortBy from "sort-by";

class ListContacts extends Component{
  static propTypes = {
    contacts : PropTypes.array.isRequired,
    onDeleteContact : PropTypes.func.isRequired
  }
  
  state = {
    query: ""
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render(){
    let filteredContacts;
    if (this.state.query){
      const match = new RegExp(escapeStringRegexp(this.state.query), "i");
      filteredContacts = this.props.contacts.filter((element) => match.test(element.name));
    }else{
      filteredContacts = this.props.contacts;
    }

    filteredContacts.sort(sortBy("name"));

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
        <ol className="contact-list">
          {filteredContacts.map((contact) => (
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{
                backgroundImage:`url(${contact.avatarURL})`
                }} />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button onClick={() => this.props.onDeleteContact(contact)} className="contact-remove"></button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListContacts;