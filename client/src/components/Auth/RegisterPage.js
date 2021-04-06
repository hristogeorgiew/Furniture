import React, { Component } from 'react';
import Input from '../Common/Input';
import { register } from '../../api/remote';
import { withRouter,  } from 'react-router-dom';

class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            repeat: '',
            error: false
           
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

        onChangeHandler(e) {
            this.setState({ [e.target.name]: e.target.value });
        }

        async onSubmitHandler(e) {
            e.preventDefault();
            const res = await register(this.state.name, this.state.email, this.state.password);
        
            if(!res.success){
                this.setState({error: res});
            }
        }


    render() {
       
        let errors = null;
        if (this.state.error) {
            errors = (
                <div>
                    <h2 className="errorMessage">{this.state.error.message}</h2>
                    {Object.keys(this.state.error.errors).map(k => {
                        return <p key={k}>{this.state.error.errors[k]}</p>;
                    })}
                </div>
            );
        }

        return (
            <div className="container">
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>Register</h1>
                    {errors}
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


export default withRouter(RegisterPage);


