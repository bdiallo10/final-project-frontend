import React, { Component } from 'react';
import ProductModel from '../../models/product'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class productCreate extends Component {
    state = {
        productName: '',
        price: '',
        aboutProduct: '',
        productLocation: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        ProductModel.create(this.state)
            .then(data => {
                this.props.history.push('/product')
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="createForm">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="productName"
                            placeholder="Please enter your product name"
                            onChange={this.handleChange}
                            value={this.state.productName}
                        />

                        <Form.Label>price</Form.Label>
                        <Form.Control 
                            type="text"
                            name="price"
                            placeholder="Enter Your price"
                            onChange={this.handleChange}
                            value={this.state.price}
                        />

                        <Form.Label>About Your Product</Form.Label>
                        <Form.Control
                            type="text" 
                            name="aboutProduct"
                            placeholder="Briefly describe your product"
                            onChange={this.handleChange}
                            value={this.state.aboutProduct}
                        />

                        <Form.Label>Enter your product location
                        </Form.Label>
                        <Form.Control 
                            type="text"
                            name="productLocation"
                            placeholder="Enter Your Team Location"
                            onChange={this.handleChange}
                            value={this.state.productLocation}
                        />

                    <Button type="submit" value="Submit form!">Add Product</Button>
                    </Form.Group>

                    
                </Form>
            </div>
        );
    }
}

export default productCreate;
