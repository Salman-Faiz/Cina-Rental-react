/* eslint-disable react/prop-types */

import { useContext, useState } from 'react'
import tag from '../assets/tag.svg'
import { getImgUrl } from '../utils/cine-utility'
import Rating from './Rating'
import MovieDetailsModal from './MovieDetailsModal'
import { MovieContext } from '../Context'

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const { cartData, setCartData } = useContext(MovieContext)

  const handleAddToCard = (event, movie) => {
    event.stopPropagation()
    

    const found = cartData.find((item) => {
      return item.id === movie.id;
    })
    if (!found) {
      setCartData([...cartData, movie])
    } else {
      alert(`The movie ${movie.title} has been already added `)
    }
  }

  const handleModalClose = () => {
    setSelectedMovie(null)
    setShowModal(false)
  }
  const handleMovieSelection = movie => {
    setSelectedMovie(movie)
    setShowModal(true)
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} onCartAdd={handleAddToCard}/>
      )}

      <figure className='p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl'>
        <a href='#' onClick={() => handleMovieSelection(movie)}>
          <img
            className='w-full object-cover'
            src={getImgUrl(movie.cover)}
            alt=''
          />
          <figcaption className='pt-4'>
            <h3 className='text-xl mb-1'>{movie.title}</h3>
            <p className='text-[#575A6E] text-sm mb-2'>{movie.genre}</p>
            <Rating value={movie.rating} />
            <a
              className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm'
              href='#'
              onClick={e => handleAddToCard(e, movie)}
            >
              <img src={tag} alt='' />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  )
}

export default MovieCard
