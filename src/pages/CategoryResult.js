import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import MealItem from '../components/meals/MealItem';

const CategoryResult = () => {
    const { category } = useParams();
    const location = useLocation();
    const description = location.state?.description;
    const [categoryResult, setCategoryResult] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.toLowerCase()}`)
            .then(response => response.json())
            .then(respData => {
                setCategoryResult(respData.meals);
            })
    }, []);

    return (
        <section className='category-result'>
            <div className="category-result-container container">
                <h2 className="heading">Results for {category}</h2>
                <p>{description}</p>
                <div className="cards-container">
                    {
                        categoryResult?.map((item) => {
                            return <MealItem key={item.idMeal}
                                category={category}
                                idMeal={item.idMeal}
                                strMeal={item.strMeal}
                                strMealThumb={item.strMealThumb} />
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default CategoryResult
