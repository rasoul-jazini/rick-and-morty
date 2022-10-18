import { useContext, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { CharacterContext } from "../context/CharacterContext";
import { FaHome } from "react-icons/fa";

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
      {data && (
        <>
          <header className="container mt-3">
            <Link
              to="/"
              className="text-gray-600 flex items-center gap-x-1 font-medium"
            >
              <FaHome size="28" />
              <span>Back to Home</span>
            </Link>
          </header>
          <div className="container">
            <div className="px-4 py-8 mt-16 bg-gray-100 rounded-md shadow-md">
              <div className="grid grid-cols-12 divide-x divide-gray-300">
                <div className="col-span-6 flex justify-center items-center">
                  <div className="w-48 h-4w-48 rounded-full overflow-hidden">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="col-span-6 px-8">
                  <h3 className="text-2xl text-gray-800 font-medium mb-5">
                    {data.name}
                  </h3>
                  <div className="flex flex-col gap-y-2">
                    <p className="border-b border-gray-200 pb-1 text-gray-800">
                      <span className="font-medium">Status: </span>
                      <span>{data.status}</span>
                    </p>
                    <p className="border-b border-gray-200 pb-1">
                      <span className="font-medium">Species: </span>
                      <span>{data.species}</span>
                    </p>
                    <p className="border-b border-gray-200 pb-1">
                      <span className="font-medium">Gender: </span>
                      <span>{data.gender}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CharacterPage;
