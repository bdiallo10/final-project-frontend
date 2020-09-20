import React, { Component } from 'react';
import ProductModel from '../../models/product'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'

//bootstrap imports
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


class productIndex extends Component {
    state = {
        product: [],
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        ProductModel.all().then(data => {
            console.log(data)
            this.setState({ product: data.product})
        })
    }
     handleChange = (e) =>{
    this.setState({searchField:e.target.value})
  }


    render() {
        return (
            <div>
                <div>
                    <h1>All the Product</h1>
                    <div>
                        <Link to={`/product/new`}>
                            <Button>Create A Product</Button>
                        </Link>
                    </div>
                </div>
                <div className='card'>
                    {this.state.product && this.state.product.map((product, index) => {
                    return (
                            <Container fluid>
                                <div>
                                    <ProductCard 
                                    {...product}/>
                                <Link to={`/product/${product._id}`}key={index}>
                                    <Button>Visit Product</Button>
                                    <Button>Add To Cart</Button>
                                </Link>
                                </div>
                            </Container>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default productIndex;
