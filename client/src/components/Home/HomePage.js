import React, { Component } from 'react';
import FurnitureList from '../Common/FurnitureList'


export default class HomePage extends Component {
    render() {
        return (
            <div className="container">
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>Welcome to Furniture System</h1>
                    <p>Select furniture from the catalog to view details.</p>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" placeholder="Search" type="text" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>

            <FurnitureList />

            <div className="row space-top">
                <div className="col-md-12">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" href="#">«</a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">4</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">5</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">»</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}