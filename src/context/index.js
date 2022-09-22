import { createContext } from "react";
import { useReducerAsync } from "use-reducer-async";
import { getCharacters, searchCharacter } from "../services/api";

export const Context = createContext();

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PENDING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case "REJECT":
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

const asyncActionHandlers = {
  GET_CHARACTERS:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "PENDING" });

      try {
        const data = await getCharacters(action.payload);
        dispatch({ type: "SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "REJECT", payload: "Something went wrong!" });
      }
    },
  SEARCH_CHARACTER:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "PENDING" });

      try {
        const data = await searchCharacter(action.payload);
        dispatch({ type: "SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "REJECT", payload: "There isn't this character!" });
      }
    },
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
