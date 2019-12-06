import React, { Component } from 'react';
import { Link } from "react-router";
import './product.css';
import { Table } from 'reactstrap';
import ProductData from '../../data/product.json';

class Product extends Component {
    render() {
        const data = ProductData.items;
        console.log("data", data.items);
        return (
            <div className="container">
                <h1>Product Page</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Sku</th>
                            <th>Brand</th>
                            <th>Description</th>
                            <th>Long Description</th>
                            <th>Price</th>
                            <th>Size</th>
                            <th>Color</th>
                            <th>In Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        {i+1}
                                    </td>
                                    <td>
                                        {d.sku}
                                    </td>
                                    <td>
                                        {d.brand}
                                    </td>
                                    <td>
                                        {d.description}
                                    </td>
                                    <td>
                                        {d.long_description}
                                    </td>
                                    <td>
                                        {d.price}
                                    </td>
                                    <td>
                                        {d.size}
                                    </td>
                                    <td>
                                        {d.color}
                                    </td>
                                    <td>
                                        {d.in_stock}
                                    </td>
                                </tr>
                            )                             
                        })}
                    </tbody>
                </Table>
                <Link to={"/"}>Home</Link>
            </div>
        )
    }
}

export default Product;