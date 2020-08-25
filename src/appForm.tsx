import React, { useState } from 'react';
import Music from './music';

export interface Search {
    artist: string;
    album: string;
    track: string;
};

const initSearch: Search = {
    artist: 'Pink Floyd',
    album: 'A saucerful of secrets',
    track: '',
}

const Form = () => {
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [track, setTrack] = useState('');
    const [search, setSearch] = useState(initSearch);

    const getSearch = () => {
        setSearch({
            artist,
            album,
            track
        });
        setArtist('');
        setAlbum('');
        setTrack('');
    };
    
    return (
        <form>
            <input type="text" onChange={e => setArtist(e.target.value)} />
            <input type="text" onChange={e => setAlbum(e.target.value)} />
            <input type="text" onChange={e => setTrack(e.target.value)} />
            <input type="button" onClick={getSearch} />
            <Music search={search} />
        </form>
    )
};

export default Form;
