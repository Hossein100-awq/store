import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './Pages/Main';
import List from './Pages/List';
import InsidCart from './Component/ShowList/InsidCart';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSearch={setSearchQuery} cart={cart} />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/List' element={<List searchQuery={searchQuery} />} />
        <Route path='/Product/:id' element={<InsidCart addToCart={addToCart} />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;