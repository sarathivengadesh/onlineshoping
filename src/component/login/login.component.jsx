
import React from 'react';

import Forminput from '../forminput/forminput.component'
import './login.scss';

class Login extends React.Component{
    constructor(props){
        super(props);

            this.state ={
                email:'',
                password:'',
      };
    }

    handlesubmit = event =>{
        event.preventDefault();

        this.setState({email:'',password:''})
    }

    handlechange = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className='login'>
                <h1>I already have an account</h1>
                <span>Sign with our email and password</span>
                <form onSubmit={this.handlesubmit}>
                    <Forminput type="email" name="email" label='Email' value={this.state.email} handler={this.handlechange} required />
                    
                    <Forminput type="password" name="password" label='Password' value={this.state.password} handler={this.handlechange} required />
                 
                    <Forminput type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Login;