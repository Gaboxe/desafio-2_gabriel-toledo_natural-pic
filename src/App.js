import "./styles.css";

import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import { MyContext } from "./Context";

export default function App() {

  const endpoint = "/fotos.json";

  const [fotos, setFotos] = useState([]);
  const globalState = {fotos, setFotos};

  useEffect(() => {
    getFotos();
  }, []);

  const getFotos = async () => {
    const response = await fetch(endpoint);
    let { photos } = await response.json();
    photos = photos.map((photo)=>({
      id: photo.id,
      src: photo.src.tiny,
      desc: photo.alt,
      fav: false
    }));

    setFotos(photos);
  }


  return (
    <div className="App">

      <MyContext.Provider value={globalState}>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
          
        </BrowserRouter>
      </MyContext.Provider>


    </div>
  );
}
