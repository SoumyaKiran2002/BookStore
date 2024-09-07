import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import {Link} from 'react-router-dom'
function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, animi expedita! Iure blanditiis consequatur sunt itaque maiores placeat distinctio tempore ea fugiat animi beatae inventore aspernatur culpa obcaecati autem pariatur eligendi cum quam deserunt, quis consequuntur quas iste! Non voluptatum fugiat quasi earum officiis illo ab fuga pariatur laborum perspiciatis dolorem consequatur, est explicabo quod nisi quam! Fugit quo consectetur optio, quidem iste amet vel veritatis error distinctio, eos quisquam! Quod minus voluptatem, eveniet dignissimos assumenda quos laborum odit numquam velit illum odio, nam modi nemo qui animi tempora magni voluptates a fuga cupiditate at nihil esse enim. Explicabo, rem?</p>
            <Link to="/"> 
                <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300 mt-6'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-55'>
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course
