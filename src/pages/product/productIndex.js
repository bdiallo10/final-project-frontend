import React, { Component } from 'react';
import ProductModel from '../../models/product'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import Search from '../../components/Search'

//bootstrap imports
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


class productIndex extends Component {
    state = {
        product: [],
        filteredList: [],
    }

    setFilteredList(filteredList) {
        this.setState({
            filteredList: [...filteredList]
        })
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

    render() {
        return (
            <div>
                <div>
                    <h1>All the Product</h1>
                    <div className="searchBar">
                        <div>
                            <Link to={`/product/new`}>
                                <Button>Create A Product</Button>
                            </Link>
                        </div>
                        <div>
                            <Search
                                product={this.state.product}
                                setFilteredList={this.setFilteredList.bind(this)}
                            />
                        </div>
                    </div>
                </div>
                <div className='card'>
                    {this.state.filteredList && this.state.filteredList.map((product, index) => {
                    return (
                            <Container fluid key={product._id}>
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
