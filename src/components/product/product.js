import React, { useState } from 'react';
import { Link } from "react-router";
import './product.css';
import Table from 'react-bootstrap/Table';
import ProductData from '../../data/product.json';
import Pagination from '../pagination/pagination';

const Product = () => {
    const data = ProductData.items;
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage] = useState(10);

    //Get current product
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="productContainer">
            <h1>Product Page Of Shoes Smart Container</h1>
            <Table responsive striped bordered hover variant="dark">
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
                    {currentProducts.map((d, i) => {
                        const pages = Math.ceil((currentPage * productPerPage) + (i+1) - productPerPage);
                        return (
                            <tr key={i}>
                                <td>
                                    {pages}
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
            <Pagination productPerPage={productPerPage} totalProduct={data.length} paginate={paginate} />
            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default Product;