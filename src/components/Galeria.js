import "../assets/css/galeria.css";
import Heart from "./Heart";

import { useContext } from "react";
import { MyContext } from "../Context";

export default function Home() {

  const { fotos, setFotos } = useContext(MyContext);

  const setFavorite = (id)=>{
    const fotoIndex = fotos.findIndex((p)=> p.id === id);
    fotos[fotoIndex].fav = !fotos[fotoIndex].fav; // se niega el valor existente
    setFotos([...fotos]);
  }

  return (
    <div className="galeria grid-columns-5 p-3">

      {
        fotos.map((foto) => {
          return (

            <div onClick={() => setFavorite(foto.id)} className="foto" style={{ backgroundImage: `url(${foto.src})` }} key={foto.id}>

              <Heart filled={foto.fav} />

              <p>{foto.desc}</p>

            </div>

          )
        })
      }
    </div>
  );
}
