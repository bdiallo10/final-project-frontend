import React, { Component } from 'react';
import ProductModel from '../models/product'

class Search extends Component {
    state = {
        product: [],
        query: '',
        filteredProduct: []
    }

    handleInputChange = event => {
        const query = event.target.value;

        this.setState(prevState => {
            const filteredProduct = prevState.product.filter(product => {
                return product.name.toLowerCase().includes(query.toLowerCase())
            })

            return {
                query,
                filteredProduct
            }
        })
    }
    
    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        ProductModel.all().then(data => {
            console.log(data)
            const {query} = this.state;
            const filteredProduct = data.filter(product => {
                return product.name.toLowerCase().includes(query.toLowerCase())
            })
            this.setState({ 
                product: data.product,
                filteredProduct
            })
        })
    }
    render() {
        return (
            <div>
                <div className="searchForm">
                        <form>
                            <input
                                placeholder="Search for..."
                                value={this.state.query}
                                onChange={this.handleInputChange}
                            />
                        </form>
                        <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
                </div>
            </div>
        );
    }
}

export default Search;
