import React, { Component } from 'react';
import ProductModel from '../models/product'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            query: '',
            filteredProduct: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    componentDidMount() {
        this.fetchData()
    }

    handleInputChange = event => {
        const query = event.target.value;

        const filteredProduct = this.state.product.filter(product => {
            return product.productName.toLowerCase().includes(query.toLowerCase())
        })
        this.setState({
            query,
            filteredProduct
        })
    }
    

    fetchData = () => {
        ProductModel.all().then(data => {
            console.log(data)
            const {query} = this.state;
            const filteredProduct = data.product.filter(product => {
                return product.productName.toLowerCase().includes(query.toLowerCase())
            })
            this.setState({ 
                product: data.product,
                filteredProduct
            })
        })
    }
    render() {
        console.log(this.state.filteredProduct)
        return (
            <div>
                <div className="searchForm">
                        <form>
                            <input
                                placeholder="Search for product..."
                                value={this.state.query}
                                onChange={this.handleInputChange}
                            />
                        </form>
                        {/* <div>{this.state.filteredProduct && this.state.filteredProduct.map(product => (
                            <p key={product}>
                                this.state.filteredProduct</p>
                        ))}</div> */}
                </div>
            </div>
        );
    }
}

export default Search;
