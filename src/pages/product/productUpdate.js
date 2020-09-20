import React, { Component } from 'react';
import ProductModel from '../../models/product'

//bootstrap import statement
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const apiurl =`http://localhost:5000/api/v1`

class teamUpdate extends Component {
    constructor(props){
        super(props)
        this.state = {
            productId: this.props.match.params.id,
            productName: '',
            price: '',
            aboutProduct: '',
            productLocation: '',
        }
        
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        this.getProductDetails()
    }

    getProductDetails(){
        fetch(`${apiurl}/product/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(response => {
            console.log(response.product)
            this.setState({
                productName: response.product.productName,
                price: response.product.price,
                aboutProduct: response.product.aboutProduct,
                productLocation: response.product.productLocation,
            }, () => {
                console.log(this.state)
            })
        })
        .catch(err => console.log(err))
    }

    editTeam(newProduct){
        fetch.request({
            method: 'put',
            url: `${apiurl}/product/${this.state.id}`,
            body: newProduct
        })
        .then(response => {
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
    }
    onSubmit(e){
        e.preventDefault()
        const newProduct = {
            productName: this.refs.productName,
            price: this.refs.price,
            aboutProduct: this.refs.aboutProduct,
            productLocation: this.refs.productLocation,
        }
        this.editProduct(newProduct)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        ProductModel.update(this.state)
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
                            refs="productName"
                            onChange={this.handleChange}
                            value={this.state.productName}
                        />

                        <Form.Label>Price</Form.Label>
                        <Form.Control 
                            type="text"
                            name="price"
                            refs="price"
                            onChange={this.handleChange}
                            value={this.state.price}
                        />

                        <Form.Label>About Product</Form.Label>
                        <Form.Control
                            type="text" 
                            name="aboutProduct"
                            refs="aboutProduct"
                            onChange={this.handleChange}
                            value={this.state.aboutProduct}
                        />

                        <Form.Label>Enter location of your product
                        </Form.Label>
                        <Form.Control 
                            type="text"
                            name="productLocation"
                            refs="productLocation"
                            onChange={this.handleChange}
                            value={this.state.productLocation}
                        />

                    <Button type="submit" value="Submit form!">Update Product!</Button>
                    </Form.Group>

                    
                </Form>
            </div>
        );
    }
}

export default teamUpdate;
