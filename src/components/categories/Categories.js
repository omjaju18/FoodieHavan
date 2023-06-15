import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import "./Categories";
import CategoriesItem from "./CategoriesItem";

const Categories = () => {
  const { state, fetchCategories } = useGlobalContext();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="categories">
      <div className="categories-container container">
        <h2 className="heading">Categories</h2>
        <div className="cards-container">
          {state.categories.map((item) => {
            return (
              <CategoriesItem
                key={item.idCategory}
                id={item.idCategory}
                strCategory={item.strCategory}
                strCategoryThumb={item.strCategoryThumb}
                strCategoryDescription={item.strCategoryDescription}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
