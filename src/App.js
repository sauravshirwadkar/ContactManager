import React,{ useState,useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts] = useState([]); 

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  // const contacts=[
  //   {
  //     id:"1",
  //     name:"Saurav",
  //     email:"saurav@gmail.com"
  //   },
  //   {
  //     id:"2",
  //     name:"Ram",
  //     email:"ram@gmail.com"
  //   },
  // ];
  return (
    <div className="container">

      <Router>
        <h1 className="text-center">Contact Manager!</h1>
        <Switch>
            <Route path="/" exact 
                   render={ (props) => (<ContactList 
                                        {...props}
                                        contacts={contacts} 
                                        getContactId={ removeContactHandler } />) }
                  // Instead of render we can also use "component" prop as shown below
                  //  component={ () => <ContactList contacts={contacts} getContactId={ removeContactHandler }/> }
             />
            <Route path="/add" exact 
                                render={ (props) => (<AddContact 
                                          {...props}
                                          addContactHandler={ addContactHandler }/>) }
                      // Instead of render we can also use "component" prop as shown below
                      // component={ () => <AddContact addContactHandler={ addContactHandler }/>} 
            />
            <Route path="/contact/:id" component={ContactDetail} />

        </Switch>
        
        {/* <AddContact addContactHandler={addContactHandler }/>
        <ContactList contacts={contacts} getContactId={ removeContactHandler }/> */}
      </Router> 
      
    </div>
  );
}

export default App;
