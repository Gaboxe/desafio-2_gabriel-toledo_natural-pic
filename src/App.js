import "./styles.css";

import { useEffect, useContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import { Provider } from "./Context";

export default function App() {
  const endpoint = "/fotos.json";

  // const {fotos, setFotos} = useContext(MyContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();

    // setFotos(data)
    console.log(data);
    // console.log(fotos);
  }

  return (
    <div className="App">

      <Provider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Provider>


    </div>
  );
}
