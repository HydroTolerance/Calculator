import React from 'react'

export default function Calculator() {

  return (
    <>
    <div className='flex justify-center items-center'>
      <div id='display' className='text-white  text-xl mb-3 flex flex-col w-1/3 justify-center border rounded-lg p-5'>
          <div>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>C</button>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>/</button>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>=</button>
          </div>
          <div>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>1</button>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>2</button>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>3</button>
          </div>
          <div>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>4</button>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>5</button>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>6</button>
          </div>
          <div>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>7</button>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>8</button>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>9</button>
          </div>
          <div>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>+</button>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>-</button>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>*</button>
          </div>
          <div>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>Del</button>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>%</button>
            <button className='bg-gray-500 h-20 w-20 rounded m-1'>.</button>
          </div>
      </div>
    </div>
    </>
  );
}
