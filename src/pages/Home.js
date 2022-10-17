import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../context";
import qs from "query-string";
import Search from "../components/Search";
import CharacterList from "../components/CharacterList";
import Paginate from "../components/Paginate";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Home = () => {
  const { state, dispatch } = useContext(Context);
  const { loading, data, error } = state;
  const location = useLocation();
  let { page } = qs.parse(location.search);
  page = page ? Number(page) : 1;

  useEffect(() => {
    dispatch({ type: "GET_CHARACTERS", payload: page });
  }, [page]);

  return (
    <section className="bg-gray-50 w-full min-h-screen py-8">
      <div className="container px-4 max-w-5xl">
        <h1 className="text-gray-900 text-3xl sm:text-5xl md:text-7xl text-center pt-4 pb-10">
          Rick And Morty
        </h1>
        <Search />
        {error && <Error error={error} />}
        {loading && <Loader />}
        {data && <CharacterList charactersData={data.results} />}
        {data && <Paginate totalPages={data.info.pages} page={page} />}
      </div>
    </section>
  );
};

export default Home;
