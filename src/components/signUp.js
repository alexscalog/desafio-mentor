
import './login.css';
import React, { Component } from 'react';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            
            email: '',
            password: '',
            mensaje:''
        }
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        
        e.preventDefault()
        this.setState({mensaje: ''})
    
        let registeredUsers = JSON.parse(localStorage.getItem('users'));
        if (registeredUsers.users.find(u => u.email === this.state.email)){
            this.setState({mensaje: '¡Ya existe un usuario con ese email!'})
            
        } else {
        registeredUsers.users.push({email:this.state.email, password:this.state.password})
        
        localStorage.setItem('users', JSON.stringify(registeredUsers));
        this.setState({mensaje: '¡Se ha registrado correctamente!'})

        }
        
        
        this.setState({
            
            email: '',
            password: ''
        })
    }
  
    render(){
        return (
            <div className="signUp">
                
                <h1>Registrarse</h1>
             <form onSubmit={this.onSubmit} className='form'>
                <div className="form-group">
                  <label  className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                  
                </div>
                <div className="mb-3">
                  <label  className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                </div>
                
                <button type="submit" className="btn btn-primary" >
                  Submit
                </button>
                <br></br>
                <span>{this.state.mensaje}</span>
              </form>
            </div>
          );
    }
}

