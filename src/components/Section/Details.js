import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../data';
import '../css/Details.css';

export const Details = () => {
    const {id} = useParams();

    const product = data.products.find((x) => x._id.toString() === id);
    
    return (
        <div className="details" key={product.id}>
            <img src={product.image} alt=""/>
            <div className="box">
                <div className="row">
                    <h2>{product.name}</h2>
                    <span>${product.price}</span>
                </div>
                {/* <Colors colors={data.products[id].colors}/> */}
                <p>{product.description}</p>
                {/* <p>{item.content}</p> */}
                <Link to="/cart" className="cart">
                Add to cart
                </Link>
            </div>
        </div>
    );
};
