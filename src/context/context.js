import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext = createContext();

const initialState = {
  activeNavLink: 1,
  showNavSidebar: false,
  categories: [],
  favourites: localStorage.getItem("favouriteMeals")
    ? JSON.parse(localStorage.getItem("favouriteMeals"))
    : [],
};

const AppProvider = ({ children }) => {
  const setActiveNavlink = (id) => {
    dispatch({ type: "SET_ACTIVE_NAVLINK", payload: id });
  };

  const fetchCategories = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((respData) => {
        dispatch({ type: "SET_CATEGORIES", payload: respData.categories });
      });
  };

  const addToFavourites = (meal) => {
    dispatch({ type: "ADD_TO_FAVOURITES", payload: meal });
  };

  const deleteFromFavourites = (id) => {
    dispatch({ type: "DELETE_FROM_FAVOURITES", payload: id });
  };

  const openNavSidebar = () => {
    dispatch({ type: "OPEN_NAV_SIDEBAR" });
  };

  const closeNavSidebar = () => {
    dispatch({ type: "CLOSE_NAV_SIDEBAR" });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        setActiveNavlink,
        fetchCategories,
        addToFavourites,
        deleteFromFavourites,
        openNavSidebar,
        closeNavSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
