import React, { useState } from 'react'
import { useEffect } from 'react';
import { useGlobalContext } from '../../context/context';
import Categories from '../../components/categories/Categories';
import "./Recipes.css";
import MealItem from '../../components/meals/MealItem';

const Recipes = () => {
  const { state, setActiveNavlink } = useGlobalContext();
  const [searchVal, setSearchVal] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const search = (value) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value.toLowerCase()}`)
      .then(response => response.json())
      .then(respData => {
        setSearchResult(respData.meals);
        console.log(respData);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    search(searchVal);
  }

  useEffect(() => {
    setActiveNavlink(2);
  }, []);

  return (
    <section className='recipes'>
      <div className="container recipes-container">
        <div className="search-bar">
          <h2 className='heading'>What do you want to eat today?</h2>
          <form className="recipes-form" >
            <input type="text" placeholder="Search for your favourite dish ingredient etc..."
              value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
            <button className='button icon-btn search-btn' onClick={(e) => handleClick(e)}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>

      
        {
          searchResult ?
            <div className="container search-results-container">
              <h2 className="heading">
                Search results for: {searchVal}
              </h2>
              <div className="cards-container">
                {
                  searchResult?.map((item) => {
                    return (
                      <MealItem key={item.idMeal}
                        category={item.strCategory}
                        idMeal={item.idMeal}
                        strMeal={item.strMeal}
                        strMealThumb={item.strMealThumb} />
                    )
                  })
                }
              </div>
            </div> :
            <Categories />
        }
      
    </section>
  )
}

export default Recipes
