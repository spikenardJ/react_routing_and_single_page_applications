import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import BrowseCharacters from "./components/BrowseCharacters";
import CharacterDetails from "./components/CharacterDetails";
import Comics from "./components/Comics";
import NavigationBar from "./components/NavigationBar";
import NotFound from "./components/NotFound";
import "./MarvelStyle.css";

function App() {
    return (
        <div>
          <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse-characters" element={<BrowseCharacters />} />
                <Route path="/character-details/:id" element={<CharacterDetails />} />
                <Route path="/comics" element={<Comics />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;