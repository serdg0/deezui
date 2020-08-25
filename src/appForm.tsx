import React, { useState } from 'react';
import Pokemon from './pokemon';

export interface Search {
    artist: string;
    album: string;
    track: string;
};

const Form = () => {
    const [input, setInput] = useState('');
    const [search, setSearch] = useState('pikachu');

    const getSearch = () => {
        setSearch(input);
        setInput('');
    };
    
    return (
        <form>
            <input type="text" onChange={e => setInput(e.target.value)} />
            <input type="button" onClick={getSearch} value="Search" />
            <Pokemon search={search} />
        </form>
    )
};

export default Form;
