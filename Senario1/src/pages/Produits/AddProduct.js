import React, { useEffect, useState } from "react";

const AddProduct = ({
  add_new_produc,
  isUpdating,
  prod_update,
  ChangeSpecificProduct,
  CancelChange,
}) => {
  const [product, setProduct] = useState({
    nom: "",
    description: "",
    prix: 0,
    categ: "",
  });

  const handle_change = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handle_submit = (e) => {
    e.preventDefault();
    if (
      product.nom === "" ||
      product.description === "" ||
      product.prix === 0
    ) {
      return alert("Please fill all the fields");
    }

    // to make a copy of the product object and add it to the products array to secure the original value
    let local_product = { ...product };

    if (isUpdating) {
      ChangeSpecificProduct(local_product);
    } else {
      add_new_produc(local_product);
    }

    setProduct({ nom: "", description: "", prix: "", categ: "" });
  };

  useEffect(() => {
    // chneya bech na3ml
    if (prod_update !== null) {
      setProduct(prod_update);
    }
  }, [prod_update]); // 3la chkoun bch nab9a n3ess

  const real_cancel_change = () => {
    CancelChange();
    setProduct({ nom: "", description: "", prix: "", categ: "" });
  };

  return (
    <div>
      {isUpdating ? <h3>Mette A Jour Produit</h3> : <h3>Ajouter Produit</h3>}
      <form>
        <div className="container w-100">
          <div className="row">
            <div className="mb-3 col-6">
              <label className="form-label">Produit libelle</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="Produit libelle"
                name="nom"
                value={product.nom}
                onChange={handle_change}
              />
            </div>

            <div className="mb-3 col-6">
              <label className="form-label">Produit prix</label>
              <input
                type="number"
                className="form-control"
                aria-describedby="Produit prix"
                name="prix"
                value={product.prix}
                onChange={handle_change}
              />
            </div>

            <div className="mb-3 col-12">
              <label className="form-label">Produit prix</label>
              <textarea
                className="form-control"
                placeholder="Produit description"
                name="description"
                value={product.description}
                rows={5}
                onChange={handle_change}
              />
            </div>

            <div className="mb-3 col-12">
              <label className="form-label">Produit Categories</label>
              <select
                className="form-select"
                name="categ"
                value={product.categ}
                onChange={handle_change}
              >
                <option value="USA">USA</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Canada">Canada</option>
                <option value="Asia">Asia</option>
                <option value="South America">South America</option>
                <option value="Australie">Australie</option>
              </select>
            </div>

            <div className="mb-3 col-12">
              <button
                type="submit"
                className="btn btn-primary w-100 p-2 mb-2"
                onClick={handle_submit}
              >
                {isUpdating ? "Modifier Produit" : "Ajouter Produit"}
              </button>

              {isUpdating ? (
                <button
                  type="submit"
                  className="btn btn-danger w-100 p-2"
                  onClick={real_cancel_change}
                >
                  Aborder Changement Produit
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
