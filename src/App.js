import { BrowserRouter, Routes, Route } from
"react-router-dom";
import Home from "./views/Home";
import Liked from "./views/Liked";
import Example from "./components/Navbar";
import Context from "./context/context";
import { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [characters,setCharacters]=useState([])
  const globalState={characters,setCharacters}

    useEffect(()=>{
      fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=2744e9424d5d7dc33145e190632c7395&hash=690ee8bddf3d05a2f67cebe68454a084")
      .then((response)=>response.json())
      .then((data)=>setCharacters(data.data.results.map(val=>{return{...val,favorite:false}}
      ).filter(char=>char.thumbnail.path!=="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available")))
    },[])
    console.log(characters)
  return (
    <div className="App">
      <Context.Provider value={globalState}>
<BrowserRouter>
      <Example/>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/liked1" element={<Liked />} />
</Routes>
</BrowserRouter>
</Context.Provider>
    </div>
  );
}

export default App;
