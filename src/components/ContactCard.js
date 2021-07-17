import React from 'react';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    const {id,name,email} = props.contact
    return(
        <div className="container-fluid">
                <div className="row ">
                    <div className="col-sm-10">
                        <Link to={{pathname:`/contact/${id}`, state:{contact:props.contact}}}>
                            <h4 className=""><b>{name}</b></h4>
                            <h4 className=""><b>{email}</b></h4>
                        </Link>
                        </div>
                    <div className="col-sm-2">
                        <button type="button" class="btn btn-danger" onClick={ () =>props.clickHandler(id) }>Delete</button>  
                    </div>
                </div>
                <hr/>
        </div>
    );
 
}

export default ContactCard;   