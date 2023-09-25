import React, { useEffect } from "react";
import OneProduct from "./OneProduct";
import AddProduct from "./AddProduct";

function Produits({
  products,
  add_new_produc,
  delete_item_product,
  MetterAJour,
  isUpdating,
  prod_update,
  ChangeSpecificProduct,
  CancelChange,
}) {
  useEffect(() => {
    document.title = "Produits";
  }, []);

  return (
    <div className="p-4">
      <AddProduct
        add_new_produc={add_new_produc}
        isUpdating={isUpdating}
        prod_update={prod_update}
        ChangeSpecificProduct={ChangeSpecificProduct}
        CancelChange={CancelChange}
      />

      <hr />
      <h3 className="mb-2">Liste des produits</h3>
      <div className="container w-100">
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-3 mb-3 h-100">
                <OneProduct
                  product={product}
                  delete_item_product={delete_item_product}
                  MetterAJour={MetterAJour}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Produits;
