import React, { Component } from 'react';
import ProductModel from '../../models/product'
import ProductCard from '../../components/ProductCard'
// import AddPlayer from '../../components/AddPlayer'


//bootstraps
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const apiurl =`http://localhost:5000/api/v1`

class ProductShow extends Component {
    state = {
        product: {},
        currentProduct: this.props.match.params.id
    }
    
    componentDidMount() {
        this.fetchData()
    }
    
    fetchData = () => {
        console.log("current")
        console.log(this.state.currentProduct)
        ProductModel.show(this.state.currentProduct).then(data => {
            console.log(data)
            this.setState({ 
                product: data.product,
            })
        })
    }

    deleteProduct(){
        if(window.confirm('Are you sure you want to delete this team?'))
        {
            return fetch(`${apiurl}/product/${this.state.currentProduct}`, {
                method: "DELETE",
    
            })
            .then(() => {
                window.confirm('The team was successfully deleted')
                this.props.history.push('/product')
            })
        }
    }

    render() {
        return (
            <div className="individualproduct">
                <div>
                    <h1>Welcome to {this.state.product.productName}</h1>
                </div>
                <div>
                    <ProductCard {...this.state.product} />
                    {/* {this.props.currentUser &&   */}
                        <Container>
                            <Button onClick={this.deleteProduct.bind(this)}>Delete</Button>
                            <Button onClick={() => this.props.history.push(`/product/update/${this.props.match.params.id}`)}>Edit</Button>
                        </Container>
                    {/* } */}
                </div>
            </div>
        );
    }
}

export default ProductShow;
