import React, { Component } from 'react';
import Input from '../Common/Input';
import { createPets } from '../../api/remote';


export default class LoginPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '', 
            location: '',
            description: '', 
            breed: '', 
            image: '', 
            gender: ''
        };
    }
    
    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        const response = await createPets({
            name: this.state.name, 
            location: this.state.location,
            description: this.state.description, 
            breed: this.state.breed, 
            image: this.state.image, 
            gender: this.state.gender
        });
    }

    render() {
        return(
            <div>
                <h1>Create Pets</h1>
                <form>
                    <Input 
                        name={name}
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                        label={Name}
                    />

                    <Input 
                        name={location}
                        value={this.state.location}
                        onChange={this.onChangeHandler}
                        label={Location}
                    />
                    <Input 
                        name={description}
                        value={this.state.description}
                        onChange={this.onChangeHandler}
                        label={Description}
                    />
                    <Input 
                        name={image}
                        value={this.state.image}
                        onChange={this.onChangeHandler}
                        label={Image}
                    />
                    <Input 
                        name={breed}
                        value={this.state.breed}
                        onChange={this.onChangeHandler}
                        label={Breed}
                    />
                    <Input 
                        name={gender}
                        value={this.state.gender}
                        onChange={this.onChangeHandler}
                        label={Gender}
                    />
                </form>
            </div>
        )
    }
}