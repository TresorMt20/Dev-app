import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Details } from './Section/Details';
import { Products } from './Section/Products';

export const Section = () => {
    return (
        <section>
            <Routes>
                <Route path="/" exact element={<Products />} />
                <Route path="/product/:id" exact element={<Details/>} />

            </Routes>


          
        </section>
    );
};
