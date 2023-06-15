import React from 'react'
import { Link } from 'react-router-dom'
import "./Categories.css"

const CategoriesItem = ({ id, strCategory, strCategoryThumb, strCategoryDescription }) => {
    return (
        <article className='categories-item'>
            <img src={strCategoryThumb} alt={strCategory} />
            <button className="button">
                <Link to={`/categories/${strCategory}`} state={{ description: strCategoryDescription }}>
                    {strCategory}
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </button>
        </article>
    )
}

export default CategoriesItem
