import React, { useEffect } from "react";
import img_bg from "../../images/bg.jpg";

function Accueil() {
  useEffect(() => {
    document.title = "Accueil";
  }, []);

  return (
    <div className="accueil">
      <div className="bg">
        <img src={img_bg} alt="C-Timbre" />
      </div>
      <div className="content">
        <h1>Catalogues De Timbres</h1>
        <h2>Votre Plateforme de Gestion de Timbres</h2>
        <p>
          C-Timbre est votre destination incontournable pour la gestion efficace
          et organisée de votre collection de timbres. Notre site web offre une
          suite complète de fonctionnalités pour les collectionneurs passionnés,
          qu'ils soient amateurs ou experts. Avec C-Timbre, découvrez un moyen
          simple et pratique de cataloguer, suivre et apprécier vos timbres
          rares et précieux.
        </p>
      </div>
    </div>
  );
}

export default Accueil;
