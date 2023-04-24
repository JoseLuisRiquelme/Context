import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Liked from "./views/Liked";
import Example from "./components/Navbar";
import Context from "./context/context";
import { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Characters from "./views/Characters";

function App() {
  const [characters,setCharacters]=useState([])
  const globalState={characters,setCharacters}

    useEffect(()=>{
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '3b9ac12464msh1f7f7b0cce0434bp19ce6ejsn43db372073af',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
      .then((response)=>response.json())
      .then((data)=>setCharacters(data.map(val=>{return{...val,favorite:false}}
      )))
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
<Route path="/characters/:id" element={<Characters/>}/>
</Routes>
</BrowserRouter>
<Footer/>
</Context.Provider>
    </div>
  );
}

export default App;
