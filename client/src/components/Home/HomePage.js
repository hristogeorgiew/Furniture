import React, { Component } from 'react';
import { getPage } from '../../api/remote';
import HotelsList from './HotelsList';

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: []
        };
    }

    //с него извикваме getData при маутване на компонента компонент hook
    componentDidMount() {
        this.getData();
    }

    async getData() {
        const data = await getPage(1);
        this.setState({ hotels: data });
    }

    render() {
        return (
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Welcome to Home</h1>
                        {this.state.hotels.length === 0 ?
                    <p>Loading &hellip;</p> :
                    <HotelsList hotels={this.state.hotels}/>}
                    </div>
                </div>
            </div>
        );
    }
}
