import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data';
import '../css/Products.css';

export const Products = () => {
    
    return (
        <div id="product">
            
            {
                data.products.map(product =>(
                    <div className="card" key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <img src={product.image} alt=""/>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/product/${product._id}`}>{product.name}</Link>
                            </h3>
                            <span>${product.price}</span>
                            <p>{product.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
