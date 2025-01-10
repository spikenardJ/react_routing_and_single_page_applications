import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const BrowseCharacters = ({ onCharacterClick }) => {
    const [characters, setCharacters] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const publicKey = "4d52fb3fa1ef52af3d6b38218aff5477";
    const ts = 1;
    const hash = "a80ea7d0806646c1f3b6bf37422fc6fd";
    const apiUrl = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  
    useEffect(() => {
      const fetchCharacters = async () => {
        try {
                const response = await axios.get(`${apiUrl}`);
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div className="character-list">
            {characters.map((character) => (
                <Link key={character.id} to={`/character-details/${character.id}`} className="character-card">
                    <div>
                        <h3>{character.name}</h3>
                        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                    </div>
                </Link>
            ))}
        </div>
    );
};
export default BrowseCharacters;