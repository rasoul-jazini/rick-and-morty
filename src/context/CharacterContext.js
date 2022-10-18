import { createContext } from "react";
import { useReducerAsync } from "use-reducer-async";
import { getSingleCharacter } from "../services/api";

export const CharacterContext = createContext();

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const characterReducer = (state, action) => {
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
  GET_CHARACTER:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "PENDING" });

      try {
        const data = await getSingleCharacter(action.payload);
        dispatch({ type: "SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "REJECT", payload: "Not found this character :(!" });
      }
    },
};

const CharacterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducerAsync(
    characterReducer,
    initialState,
    asyncActionHandlers
  );
  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;
