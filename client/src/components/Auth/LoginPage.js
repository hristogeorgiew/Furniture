import React, { Component } from 'react';
import Input from '../Common/Input';
import { login } from '../../api/remote';


export default class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitHandler(e) {
        e.preventDefault();
        login(this.state.email, this.state.password);
    }

    

    render() {

        return (
            <div className="container">
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>Login</h1>
                </div>
            </div>
            <form onSubmit={this.onSubmitHandler}>
                <div className="row space-top">
                    <div className="col-md-4">
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
						<input type="submit" className="btn btn-primary" value="Login" />
                    </div>
                </div>
            </form>
        </div>
        );
    }
}



