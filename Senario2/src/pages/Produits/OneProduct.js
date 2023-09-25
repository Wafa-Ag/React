import React from "react";
import TrashIcon from "bootstrap-icons/icons/trash.svg";
import EditIcon from "bootstrap-icons/icons/pencil-square.svg";

const OneProduct = ({ product, delete_item_product, MetterAJour }) => {
  const real_delete = () => {
    delete_item_product(product);
  };

  const real_metter_a_jour = () => {
    MetterAJour(product);
  };

  return (
    <div className="card w-100">
      <div className="card-body ">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            {product.id} : {product.nom}
          </h5>
          <div className="d-flex justify-content-between">
            <img
              src={TrashIcon}
              className="m-1 icon-delete"
              alt="Supprimer"
              onClick={real_delete}
            />
            <img
              src={EditIcon}
              className="m-1 icon-edit "
              alt="Modifier"
              onClick={real_metter_a_jour}
            />
          </div>
        </div>

        <h6 className="card-subtitle mb-2 text-body-secondary">
          Categ : {product.categ} / Prix : {product.prix}$
        </h6>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  );
};

export default OneProduct;
