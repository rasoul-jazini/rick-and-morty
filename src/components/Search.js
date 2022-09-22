import { useContext, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";

const Search = () => {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    navigate({ search: "" });
    dispatch({ type: "SEARCH_CHARACTER", payload: name });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="relative w-full h-10 rounded-md overflow-hidden border border-gray-300">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Search Characters"
          className="w-full h-full pl-10 bg-transparent py-2 text-gray-700 focus:outline-none"
        />
        <HiSearch
          size="22"
          className="absolute bottom-[6.5px] left-2 text-gray-400"
        />
      </div>
    </form>
  );
};

export default Search;
