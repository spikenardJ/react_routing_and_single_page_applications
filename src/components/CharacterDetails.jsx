import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { apiUrl } from "./Config.jsx"

const CharacterDetails = () => {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const publicKey = "4d52fb3fa1ef52af3d6b38218aff5477";
    const ts = 1;
    const hash = "a80ea7d0806646c1f3b6bf37422fc6fd";
    const apiUrl = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    useEffect(() => {
        const fetchCharacterDetail = async () => {
          try {
            const response = await axios.get(`${apiUrl}`);
            setCharacter(response.data.data.results[0]);
          } catch (error) {
            console.error("Error fetching character details:", error);
          } finally {
            setLoading(false);
          }
        };
    
        if (id) {
          fetchCharacterDetail();
        }
      }, [id]);
    
      if (loading) {
        return <p>Loading...</p>;
      }
    
      if (!character) {
        return <p>No character selected.</p>;
      }
    
      return (
        <div className="character-detail">
          <h2>{character.name}</h2>
          {/* <h2><Link to="/browse-characters">Go Back</Link></h2> */}
          <p>{character.description || "No description available."}</p>
          {/* <p>{character.description}</p> */}
          {character.thumbnail && (
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            )}
          <h3 className="comics-list">Comics:</h3>
          <ul>
            {character.name}{character.comics.items.length > 0 ? (
              character.comics.items.map((comic, index) => (
                <li key={index}>{comic.name}</li>
              ))
            ) : (
              <p>No comics found.</p>
            )}
          </ul>
        </div>
      );
    };
    
    export default CharacterDetails;