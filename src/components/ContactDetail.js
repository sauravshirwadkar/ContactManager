import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import user from "../Images/dummy.jpg"

const ContactDetail = (props) => {
    console.log(props);
    const {name,email} = props.location.state.contact;
    return(
    <div className="container">
        <div className="d-flex justify-content-center">
            <Card className="">
                        <Card.Body className="text-center">
                            <Card.Img className="" variant="" src={user} alt="user"/>
                            <Card.Title>Contact Information</Card.Title> 
                            <h4 className="">Name: {name}</h4>
                            <h4 className="">Email: {email}</h4>
                            <Link to="/"><Button variant="primary">Go Back to ContactList</Button></Link>
                        </Card.Body> 
            </Card>
        </div>
            
    </div>
        
    );
 
};

export default ContactDetail;   