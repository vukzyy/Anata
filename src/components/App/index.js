import React from 'react';

import Header from "../Header";
import Home from "../Home";
import Video from "../Video";
import Footer from "../Footer";
import ProductList from "../ProductList";

import './style.scss'

const App = () => {
    return (
        <div className='container'>
            <Header/>
            <Home/>
            <Video/>
            <ProductList/>
            <Footer/>
        </div>
    );
};

export default App;