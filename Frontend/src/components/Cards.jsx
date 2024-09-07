import React from 'react'
import PropTypes from 'prop-types'
import list from '../../public/list.json'

function Cards({item}) {
    console.log(item);
    Cards.propTypes = {
        item: PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string
        })
      }
  return (
    <>
     <div className='mt-6'>
     <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-150 cursor-pointer">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className=" cursor-pointer px-2 py-1 rounded-lg badge-outline hover:bg-pink-500 text-white duration-200 px-2 py-1">Buy Now</div>
    </div>
  </div>
</div>
     </div>
    </>
  )
}

export default Cards
