import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    

    const renderContactList = props.contacts.map((contact) => {
        return (
           <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>  
        );
    })
    return(
        <div className="container">
            <h1 className="text-center">Contact List
                <Link to="/add"><button type="button" class="btn btn-primary" style={{marginLeft:"10px"}}>Add Contact</button></Link>
            </h1>
            {renderContactList}
        </div>
    );
}
 export default ContactList;