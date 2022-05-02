import React, { useState, useEffect } from 'react';
import md5 from 'md5';

import api from '../services/api';
import { Character } from '../types/character';

const ts = Number(new Date());
const privateKey = '4cef92361db7b134f2ee1ad11942a18d01ebf2ac';
const publicKey = '0a76e512fa01c6e213eef9f6773f30d3';
const hash = md5(ts + privateKey + publicKey);

function useFetch(searchTerm: string | null) {
  const [data, setData] = useState<Character[]>([]);

  const charName = searchTerm && `nameStartsWith=${searchTerm}&`;

  useEffect(() => {
    api
      .get(`characters?${charName}ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      .then(({ data }) => setData(data.data.results));
  }, [charName]);

  return data;
}

export default useFetch;
