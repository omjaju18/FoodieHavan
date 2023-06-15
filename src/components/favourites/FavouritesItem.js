import React from 'react'
import "./Favourites.css"
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/context'

const FavouritesItem = ({ id, category, title, thumbnail }) => {
    const { deleteFromFavourites } = useGlobalContext();
    return (
        <article className='favourites-item'>

            <div className="info">
                <img src={thumbnail} alt={title} />
                <div >
                    <Link to={`/categories/${category}/${id}`}>
                        <h3>{title}</h3>
                    </Link>
                    <p>Category: {category}</p>
                </div>
            </div>

            <button className="button icon-btn" onClick={() => deleteFromFavourites(id)}>
                <span>Remove from favourites</span>
                <i className="fa-solid fa-trash"></i>
            </button>

        </article>
    )
}

export default FavouritesItem
