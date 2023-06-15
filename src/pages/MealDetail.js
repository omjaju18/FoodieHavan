import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import "../components/meals/Meals.css"
import ReactPlayer from 'react-player/youtube'
import { useGlobalContext } from '../context/context'

const MealDetail = () => {
    const { state, addToFavourites, deleteFromFavourites }= useGlobalContext();
    const { category, mealId } = useParams();
    const [mealData, setMealData] = useState({});
    const [instructionArray, setInstructionArray] = useState(null);
    const [showYoutubePlayer, setShowYoutubePlayer] = useState(false);
    const numArr = Array.from({ length: 20 }, (_, index) => index + 1);
    const [meal, setMeal]= useState({});

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(response => response.json())
            .then(respData => {
                setMealData(respData.meals[0]);
                setInstructionArray(respData.meals[0].strInstructions.split('\r\n'));
                setMeal({
                    id: mealId,
                    category: category,
                    title: respData.meals[0].strMeal,
                    thumbnail: respData.meals[0].strMealThumb
                });
            });
    }, []);

    
    return (
        <section className='meal-detail'>
            <div className="meal-detail-container container">

                <div className="meal-detail-title">
                    <h2 className='heading'>{mealData?.strMeal}</h2>
                    {
                        state.favourites.some((item)=> item.id === mealId)?
                        <i className="fa-solid fa-heart" onClick={()=> deleteFromFavourites(mealId)}></i>:
                        <i className="fa-regular fa-heart" onClick={()=> addToFavourites(meal)}></i>
                    }
                </div>

                <div className="meal-detail-content">
                    <div className="meal-detail-subcontent meal-detail-img">
                        <img src={mealData?.strMealThumb} alt={mealData?.strMeal} />
                    </div>
                    <div className="meal-detail-subcontent">
                        <h3>{mealData?.strMeal}</h3>
                        <h4>Category: {category}</h4>
                        <div className="meal-detail-ingredients">
                            <ul>
                                {
                                    numArr.map((item, index) => {
                                        if (mealData[`strIngredient${item}`] != "" && mealData[`strIngredient${item}`] != null) {
                                            return (
                                                <li key={index}>{mealData[`strIngredient${item}`]}: {mealData[`strMeasure${item}`]} </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                        {
                            mealData.strYoutube != "" && mealData.strYoutube != null &&
                            <button className='button' onClick={() => { setShowYoutubePlayer(true) }}> 
                                Watch video tutorial 
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        }

                    </div>
                </div>

                {showYoutubePlayer && <ReactPlayer className="react-player" url={mealData.strYoutube} />}

                <div className="meal-details-instructions">
                    <h2 className='heading'>Instructions: </h2>
                    <ul>
                        {
                            instructionArray &&
                            instructionArray.map((item, index) => {
                                if (item != "" && item != null) {
                                    return <li key={index}>{item}</li>;
                                }

                            })
                        }
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default MealDetail
