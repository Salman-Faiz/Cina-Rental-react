/* eslint-disable react/prop-types */

import tag from '../assets/tag.svg'
import { getImgUrl } from '../utils/cine-utility'
import Rating from './Rating'

const MovieCard = ({ movie }) => {
  return (
    <figure className='p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl'>
      <img
        className='w-full object-cover'
        src={getImgUrl(movie.cover)}
        alt=''
      />
      <figcaption className='pt-4'>
        <h3 className='text-xl mb-1'>{movie.title}</h3>
        <p className='text-[#575A6E] text-sm mb-2'>{movie.genre}</p>
       <Rating value={movie.rating}/>
        <a
          className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm'
          href='#'
        >
          <img src={tag} alt='' />
          <span>${movie.price} | Add to Cart</span>
        </a>
      </figcaption>
    </figure>
  )
}

export default MovieCard
