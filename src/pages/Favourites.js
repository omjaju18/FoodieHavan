import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context';
import FavouritesItem from '../components/favourites/FavouritesItem';
import "../components/favourites/Favourites.css"
const Favourites = () => {
  const { state, setActiveNavlink } = useGlobalContext();

  useEffect(() => {
    setActiveNavlink(3);

  }, []);


  return (
    <section className='favourites'>
      <div className="container favourites-container">
        {
          state.favourites.length > 0 ?
            <>
              <h2 className="heading">My Favourites</h2>
              <div className="favourites-item-container">
                {
                  state.favourites.map((item) => {
                    return <FavouritesItem key={item.id}
                      id={item.id}
                      category={item.category}
                      title={item.title}
                      thumbnail={item.thumbnail} />
                  })
                }
              </div>
            </> :
            <h2 className='heading'>All your favourites will appear here</h2>
        }

      </div>
    </section>
  )
}

export default Favourites
