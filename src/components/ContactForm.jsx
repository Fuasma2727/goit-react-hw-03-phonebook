import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    contacts:[],
    name: '',
    number: '',
  };

  componentDidMount() {
console.log(this.state.contacts);
  }
  componentDidUpdate(){
  console.log('actualizo');
    }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.number]: e.target.value
    });
  };

  handleSubmit = (e)=>{
    e.preventDefault();
    const{name,number}= this.state;
    if (name.trim()==='') return;
    const newContact={
      id:nanoid(),
      name,
      number,

    };
    this.props.addContact(newContact);
    this.setState({name:''});
    this.setState({number:''});
  };

render(){
  return(

    <form onSubmit={this.handleSubmit}>
        <label>name</label>
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces."
      required
      value={this.state.name}
      onChange={this.handleChange}
    />
    <label>tel</label>
    <input
  type="tel"
  name="number"
  pattern="[0-9+\s]+"
  required
  value={this.state.number}
      onChange={this.handleChange}
/>
    <button type="submit">Add Contact</button>
  </form>
);
}
}

export default ContactForm;  