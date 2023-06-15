export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_NAVLINK":
      {
        return { ...state, activeNavLink: action.payload };
      }
      break;
    case "OPEN_NAV_SIDEBAR":
      {
        return { ...state, showNavSidebar: true };
      }
      break;
    case "CLOSE_NAV_SIDEBAR":
      {
        return { ...state, showNavSidebar: false };
      }
      break;
    case "SET_CATEGORIES":
      {
        return { ...state, categories: action.payload };
      }
      break;
    case "ADD_TO_FAVOURITES":
      {
        const favArray = [...state.favourites, action.payload];
        localStorage.setItem("favouriteMeals", JSON.stringify(favArray));
        return {
          ...state,
          favourites: JSON.parse(localStorage.getItem("favouriteMeals")),
        };
      }
      break;
    case "DELETE_FROM_FAVOURITES":
      {
        const favArray = state.favourites.filter(
          (item) => item.id !== action.payload
        );
        localStorage.setItem("favouriteMeals", JSON.stringify(favArray));
        return {
          ...state,
          favourites: JSON.parse(localStorage.getItem("favouriteMeals")),
        };
      }
      break;
  }
};
