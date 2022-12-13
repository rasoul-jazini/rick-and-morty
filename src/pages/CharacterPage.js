import { useContext, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import CharacterDetail from "../components/CharacterDetail";
import Loader from "../components/Loader";
import { CharacterContext } from "../context/CharacterContext";

const CharacterPage = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(CharacterContext);
  const { loading, data, error } = state;

  useEffect(() => {
    dispatch({ type: "GET_CHARACTER", payload: id });
  }, [id, dispatch]);

  return (
    <>
      {loading && <Loader />}
      {error && <Navigate to="/404" replace />}
      {data && <CharacterDetail data={data} />}
    </>
  );
};

export default CharacterPage;
