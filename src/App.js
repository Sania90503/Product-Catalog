import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import productsData from "./data/products.json"


function App() {
  const[products , setProducts] = useState(productsData);
  const [searchTerm, setSearchTerm]= useState("");
  const[selectedCategory, setSelectedCategory]= useState("");



  const filteredProducts = products.filter((product)=>{
    product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const catergorizedProducts = selectedCategory ? filteredProducts.filter((product)=> product.category === selectedCategory): filteredProducts;

  return (
    <Router> 
      <div>
        <h1>Product catalog</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> 
        <CategoryFilter 
        products={products}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
         />
         <Routes>
          <Route 
          path= "/"
          element= {<ProductList products = {catergorizedProducts}/>}
           />
           <Route path="/product/:id" element={<ProductDetails/>} 
           />
         </Routes>
      </div>
    </Router>
  );
}

export default App;
