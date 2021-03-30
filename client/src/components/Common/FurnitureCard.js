import React, { Component } from 'react';


export default class FurnitureCard extends Component {
    render(){
        return(
            <div className="col-md-4">
            <div className="card text-white bg-primary">
                <div className="card-body">
                    <blockquote className="card-blockquote">
                        <img src="https://www.ikea.com/mx/en/images/products/uppland-2-seat-sofa-totebo-light-beige__0818550_pe774481_s5.jpg?f=s" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Someone famous in
                            <cite title="Source Title">Source Title</cite>
                        </footer>
                        <div className="pull-right">
                            <a href="details.html" class="btn btn-info">Details</a>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
        )
    }
}
