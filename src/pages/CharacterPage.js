import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CharacterContext } from "../context/CharacterContext";

const CharacterPage = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(CharacterContext);

  useEffect(() => {
    dispatch({ type: "GET_CHARACTER", payload: id });
  }, [id, dispatch]);

  console.log(state);

  return <div>CharacterPage</div>;
};

export default CharacterPage;
