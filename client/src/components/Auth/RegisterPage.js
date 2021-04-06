import React, { Component } from 'react';
import Input from '../Common/Input';
import { register } from '../../api/remote';

 export default class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            repeat: ''
           
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

        onChangeHandler(e) {
            this.setState({ [e.target.name]: e.target.value });
        }

        onSubmitHandler(e) {
            e.preventDefault();
            register(this.state.name, this.state.email, this.state.password);
        }


    render() {
       

        return (
            <div className="container">
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>Register</h1>
                </div>
            </div>
            <form onSubmit={this.onSubmitHandler}>
                <div className="row space-top">
                    <div className="col-md-4">
                        <Input 
                            name="name"
                            value={this.state.name}
                            onChange={this.onChangeHandler}
                            label="Name"
                        />
                         <Input 
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeHandler}
                            label="E-mail"
                        />
                        <Input 
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangeHandler}
                            label="Password"
                        />
						 <Input 
                            name="repeat"
                            type="password"
                            value={this.state.repeat}
                            onChange={this.onChangeHandler}
                            label="Repeat password"
                        />
						<input type="submit" class="btn btn-primary" value="Register" />
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

    


