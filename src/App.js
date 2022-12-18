import React from "react";
import {Article, Brand, Cta, Feature, Navbar} from "./components";
import {Blog, Features, Footer, Header, Possibilty, WhatGPT} from "./container";
import "./app.css";

const App=()=>{

    return(
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT />
            <Features />
            <Possibilty />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
};

export default App;