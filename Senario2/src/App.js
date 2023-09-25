import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Accueil from "./pages/Accueil/Accueil";
import Produits from "./pages/Produits/Produits";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [prod_update, set_prod_update] = useState(null);
  const [AllProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    setAllProducts(data);
    return data;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const add_new_produc = async (product) => {
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    fetchProducts();
  };

  const delete_item_product = async (product) => {
    await fetch(`http://localhost:5000/products/${product.id}`, {
      method: "DELETE",
    });
    fetchProducts();
  };

  // const ChangeSpecificProduct = (product) => {
  //   const new_products = AllProducts.map((item) => {
  //     if (item.id === product.id) {
  //       return product;
  //     }
  //     return item;
  //   });
  //   setAllProducts(new_products);
  //   setIsUpdating(false);
  // };

  const ChangeSpecificProduct = async (new_product) => {
    await fetch(`http://localhost:5000/products/${new_product.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(new_product),
    });
    fetchProducts();
    setIsUpdating(false);
  };

  const MetterAJour = (product) => {
    setIsUpdating(true);
    set_prod_update(product);
  };

  const CancelChange = () => {
    setIsUpdating(false);
    set_prod_update(null);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route
          path="/produits"
          element={
            <Produits
              products={AllProducts}
              add_new_produc={add_new_produc}
              delete_item_product={delete_item_product}
              MetterAJour={MetterAJour}
              isUpdating={isUpdating}
              prod_update={prod_update}
              ChangeSpecificProduct={ChangeSpecificProduct}
              CancelChange={CancelChange}
            />
          }
        />
        <Route path="/*" element={<Navigate to="/accueil" />} />
      </Routes>
    </div>
  );
}

export default App;
