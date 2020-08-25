import React, { useState, useEffect } from 'react';
import { Search } from './appForm';
import axios from 'axios';

const Music = (props: {search: Search}) => {
    const [music, setMusic] = useState(null);
    const {search: {artist, album, track}} = props;

    useEffect(() => {
        const url = `https://api.deezer.com/search?q=artist:"${artist}"`
        axios.get(url)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err)
        })
    }, [artist, album, track]);

    return (
        <p>MUSIC</p>
    );
};

export default Music;