import React, { Component } from 'react';
import { getPage } from '../../api/remote';
import HotelsList from './HotelsList';
import { Link } from 'react-router-dom';

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

   
    //pagination
    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.page !== this.props.match.params.page) {
            console.log('here');
            this.getData(Number(nextProps.match.params.page));
        }
    }

    async getData(page = Number(this.props.match.params.page) || 1) {
        const data = await getPage(page);
        this.setState({ hotels: data });
    }

    render() {

        const page = Number(this.props.match.params.page || 1);

        return (
            <div>
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Welcome to Home</h1>
                        {this.state.hotels.length === 0 ?
                        <p>Loading &hellip;</p> :
                        <HotelsList hotels={this.state.hotels}/>}

                        <div className="pagination">
                            {page > 1 && <Link to={'/view/' + (page - 1)}>&lt;</Link>}
                            <Link to={'/view/' + (page + 1)}>&gt;</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
