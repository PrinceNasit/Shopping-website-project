import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {add,remove} from '../redux/Slices/CartSlice'
import { toast } from 'react-hot-toast';

export default function Product({post}) {

  const {cart}=useSelector((state)=> state);
  const dispatch=useDispatch();
  const addToCart =()=>{
    dispatch(add(post));
    toast.success("item added to cart");
  }
  const removeFromCart =()=>{
    dispatch(remove(post.id));
    toast.error("item removed from cart");
  }
  return (
    <div className='flex flex-col items-center justify-between
    hover:scale-110 transition duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 mt-10 p-4 ml-5 rounded-xl'>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className='h-[200px] flex items-center'>
        <img  className='h-full ' src={post.image} alt="" />
      </div>
      <div className='flex justify-between gap-12'>
      <div >
        <p className='text-green-600 font-semibold items-center w-full mt-5'>${post.price}</p>
      </div>
      <button>
        {
          cart.some((p)=> p.id===post.id) ?
          (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300
          mt-5'
          onClick={removeFromCart}>
            Remove Item
          </button>):
          (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 mt-5'
           onClick={addToCart}>
            Add to Item
          </button> )
        }
      </button>
    </div>
    </div>
  )
}
