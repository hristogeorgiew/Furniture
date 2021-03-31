import React, { Component } from 'react';
import Input from './Input';
import { login, register } from '../../api/remote';
import { Redirect } from 'react-router-dom';

export default class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            repeat: '',
            redirect: false
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

        onChangeHandler(e) {
            this.setState({ [e.target.name]: e.target.value });
        }

        async onSubmitHandler(e) {
            e.preventDefault();
            //Изпращаме на сървъра данните и res е това, което ни връща сървъра json format
            const res = await register(this.state.name, this.state.email, this.state.password);
            
            if (res.success) {
                const token = await login(this.state.email, this.state.password);
                //запазваме си в сесия за автентикация това което ни връща сървъра
                localStorage.setItem('authToken', token.token);
                localStorage.setItem('user', token.user.name);
                this.setState({ redirect: true })
            }
        }


    render() {
        if (this.state.redirect) {
            return (
                <Redirect to="/" />
            );
        }
        return (
            <div className="container">
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>Register</h1>
                    <p>Please fill all fields.</p>
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






