import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Accueil from "./pages/Accueil/Accueil";
import Produits from "./pages/Produits/Produits";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [prod_update, set_prod_update] = useState(null);
  const [AllProducts, setAllProducts] = useState([
    {
      id: 1,
      nom: "Timbre 1",
      description: "BAHAMAS SG157 1938",
      prix: "99",
      categ: "Africa",
    },
    {
      id: 2,
      nom: "Timbre 1",
      description: "Nevis 2019 - Lionfish rouge - Feuillet de timbres souvenir",
      prix: "80",
      categ: "Canada",
    },
  ]);

  const add_new_produc = (product) => {
    let id = 0;
    if (AllProducts.length > 0) {
      AllProducts.forEach((item) => {
        if (item.id > id) {
          id = item.id;
        }
      });
    }
    let prod_with_id = { ...product, id: id + 1 };

    setAllProducts([...AllProducts, prod_with_id]);
    console.log("AllProducts", AllProducts);
  };

  const delete_item_product = (product) => {
    let new_products = AllProducts.filter((item) => item.id !== product.id);
    setAllProducts(new_products);
  };

  const MetterAJour = (product) => {
    setIsUpdating(true);
    set_prod_update(product);
  };

  const ChangeSpecificProduct = (product) => {
    const new_products = AllProducts.map((item) => {
      if (item.id === product.id) {
        return product;
      }
      return item;
    });
    setAllProducts(new_products);
    setIsUpdating(false);
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
