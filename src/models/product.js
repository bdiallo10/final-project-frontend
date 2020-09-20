const apiurl =`http://localhost:5000/api/v1`

class ProductModel {
    static all = () => {
        return fetch(`${apiurl}/product`).then(res => res.json())
    }
    static show = (productId) => {
        return fetch(`${apiurl}/product/${productId}`).then(res => res.json())
    }
    static create = (productData) => {
        return fetch(`${apiurl}/product`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
    }
    static delete = (productId) => {
        return fetch(`${apiurl}/product/${productId}`, {
            method: "DELETE",

        })
    }
    static update = (updatedProduct) => {
        let productId = updatedProduct.productId
        return fetch(`${apiurl}/product/${productId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
    }

}

export default ProductModel