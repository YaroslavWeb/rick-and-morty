import axios from 'axios';

import {charactersUrl, filteredCharactersUrl } from 'utils/constants'

export const getCharacters = axios.get(charactersUrl)
  .then((res) => {
    const characters = res.data.results || [];
    return characters;
  }).catch((e)=>{
    alert(e)
  });

export const getFilteredCharacters = async (value: string) => axios.get(filteredCharactersUrl + value )
  .then((res) => {
    const characters = res.data.results || [];
    return characters;
  }).catch(()=>{
    return []
  });
