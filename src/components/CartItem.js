import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice';
import {toast} from 'react-hot-toast'

export default function CartItem({item,itemIndex}) {

  const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item removed successfully");
  } 
  return (
    
      <div className='flex max-w-[900px]'>
        <div className='h-[180px]'>
          <img className='h-full' src={item.image} alt="" />
        </div>
        <div className='mt-5 ml-6'>
          <p className='text-gray-700 font-semibold text-lg w-40 '>{item.title}</p>
          <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{item.description.split(" ").slice(0,10).join(" ")+"..."}</p>
          <div>
            <p>${item.price}</p>
            <div onClick={removeFromCart}>

            <FcDeleteDatabase/>
            </div>
          </div>
        </div>
      </div>
  )
}
