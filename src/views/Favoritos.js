import "../assets/css/favoritos.css"

import { useContext } from "react";
import { MyContext } from "../Context";

export default function Favoritos() {

  const { fotos } = useContext(MyContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">

        {
          fotos.filter((f) => f.fav).map((photo) => {
            return (
              <div className="foto1" style={{ backgroundImage: `url(${photo.src})` }} key={photo.id}>

              </div>
            )
          })
        }
        
      </div>
    </div>
  );
}
