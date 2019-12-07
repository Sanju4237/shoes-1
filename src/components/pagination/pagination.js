import React from 'react';
import './pagination.css';

const Pagination = ({ productPerPage, totalProduct, paginate }) => {
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalProduct / productPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} onClick={() => paginate(number)} className="page-item">
                        {number}
                    </li>
                ))}
            </ul>
        </div>
    )
} 

export default Pagination;