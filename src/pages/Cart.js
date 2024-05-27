import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

export default function Cart() {

  const {cart} = useSelector((state)=> state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    const r=cart.reduce((acc,curr)=> acc + curr.price,0);
    setTotalAmount(r);
},[cart])
  return (
    <div>
      {
        cart.length>0?
        (
          <div className='flex w-screen flex-row justify-evenly mx-[100px]'>   
                   <div className='m-14 mt-8 '>
             {
              cart.map((item,index)=>(
                <CartItem key={index} item={item} itemIndex={index}/>
              ))
             }
          </div>
          <div className='flex flex-col'>
            <div>
              <div>Your Cart</div>
              <div>Summery</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
          </div>
          <div>
            <p>Total Amount : ${totalAmount}</p>
          </div>
          </div>
          </div>

        ):
        (<div>
          <h2>Your Cart is empty</h2>
          <Link to={"/"}>
          Shop Now</Link>
          </div>)
      }
    </div>
  )
}
