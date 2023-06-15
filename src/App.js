import { Route, Routes } from "react-router-dom";
import Categories from "./components/categories/Categories";
import Navbar from "./components/navbar/Navbar";
import CategoryResult from "./pages/CategoryResult";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import MealDetail from "./pages/MealDetail";
import Recipes from "./pages/recipes/Recipes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recipes" element={<Recipes />} />
          <Route exact path="/favourites" element={<Favourites />} />
          <Route exact path="/categories" element={<Categories/>}/>
          <Route exact path="/categories/:category" element={<CategoryResult/>}/>
          <Route exact path="/categories/:category/:mealId" element={<MealDetail/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
