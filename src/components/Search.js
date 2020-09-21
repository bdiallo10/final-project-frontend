import React, { useState, useEffect } from 'react';


const Search = (props) => {
    const [query, setQuery] = useState('')
    console.log(props.product)
    
    const handleInputChange = event => {
        setQuery(event.target.value)
    }

    function filterFromQuery() {
        const filteredProduct = props.product.filter(product => {
            return product.productName.toLowerCase().includes(query.toLowerCase())
        })
        props.setFilteredList(filteredProduct)
    }

    useEffect(filterFromQuery, [query, props.product])

    return (
        <div>
            <div className="searchForm">
                    <form>
                        <input
                            placeholder="Search for product..."
                            value={query}
                            onChange={handleInputChange}
                        />
                    </form>
            </div>
        </div>
    );
}

export default Search;
