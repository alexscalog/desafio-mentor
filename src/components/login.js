
import './login.css';

import React, { Component } from 'react';

export default class Login extends Component {

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
        if (localStorage.getItem('users')=== null){
          localStorage.setItem('users', JSON.stringify({users: []}));
      }
    
        let registeredUsers = JSON.parse(localStorage.getItem('users'));
        let user = registeredUsers.users.find(u => u.email === this.state.email);
        if (user && user.password === this.state.password){ 
          this.setState({mensaje: 'Correcto'})
        } else { this.setState({mensaje: 'Incorrecto'})};
       
        this.setState({
            
            email: '',
            password: ''
        })
    }
  
    render(){
        return (
            <div className="Login">
              <h1>Inicia Sesión</h1>
             <form onSubmit={this.onSubmit}>
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