import axios from "axios";

axios.defaults.baseURL = " https://rickandmortyapi.com/api";

export const getCharacters = async (page) => {
  const { data } = await axios.get(`/character?page=${page}`);
  return data;
};

export const searchCharacter = async (name) => {
  const { data } = await axios.get(`/character?name=${name}`);
  return data;
};

export const getSingleCharacter = async (characterId) => {
  const { data } = await axios.get(`character/${characterId}`);
  return data;
};
