import React from 'react';

class AddContact extends React.Component {
    state = {
        name:"",
        email:""
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are required!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
        this.props.history.push("/");
    }
   render(){
     return(
        
        <form onSubmit={this.add}>
            <div class="form-group">
                <label for="exampleInputEmail1">Name:</label>
                <input type="text" class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter Name" name="name"
                       value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})} />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Email:</label>
                <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Enter Email Id" name="email"
                       value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} />
            </div>
            <button type="submit" class="btn btn-primary" >Add</button>
        </form>
        
    );
   } 
}

export default AddContact;