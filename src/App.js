import React, { Component, createContext, useCallback, useState } from "react";
// import Student from "./Student";
import LifeCycle from "./LifeCycle";
import ClassComp from "./ClassComp";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Ref from "./components/Ref";
import UseMemo from "./components/UseMemo";
import Contex from "./components/Contex";
import Counter1 from "./components/Counter1";
import Validation from "./components/Validate";




function App() {
  
  return (
    <>
      <h1>React</h1>
      <Validation/>
      
     

      {/* <header>
      <Navbar/>

      </header> */}
      {/* <LifeCycle defaultName='suman'/> */}
      {/* <ClassComp/> */}
      {/* <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product-detail/:productId' element={<ProductDetail/>}/>
        

       </Routes> */}
    </>
  );
}
export default App;

