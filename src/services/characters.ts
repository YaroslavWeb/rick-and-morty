import axios from 'axios';

export const getCharacters = axios.get('https://rickandmortyapi.com/api/character')
  .then((res) => {
    const characters = res.data.results;
    return characters;
  });

export const getFilteredCharacters = async (value: string) => axios.get(`https://rickandmortyapi.com/api/character/?name=${value}`)
  .then((res) => {
    const characters = res.data.results;
    return characters;
  });
