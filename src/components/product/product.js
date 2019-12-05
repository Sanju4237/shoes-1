import React from 'react';
import { Link } from "react-router";
import './product.css'

class Product extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>This is our Product Page</h1>
                <p>This page is under maintenance.... will be back shortly!</p>
                <p><Link to={"/"}>HOME</Link></p>
            </div>
        )
    }
}

export default Product;