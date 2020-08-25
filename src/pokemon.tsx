import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Response {
    data: {
        name: string,
        sprites: {

        }
    }
};

const Pokemon = (props: {search: string}) => {
    const { search } = props;
    const [pokemon, setPokemon] = useState(null);
    const [sprites, setSprites] = useState(null);
    const [pokemonName, setPokemonName] = useState(null);

    const mapSprites: unknown = () => {
        Object.values(sprites).map(sprite => <img src={sprite} />);
    }

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${search}`;
        axios.get(url)
        .then((response: Response) => {
            console.log(response);
            const { data: {name, sprites}} = response;
            setPokemonName(name);
            setSprites(sprites);
        })
        .catch(err => {
            console.log(err)
        })
    }, [search]);
    console.log(sprites)
    return (
        <p>MUSIC</p>
    );
};

export default Pokemon;