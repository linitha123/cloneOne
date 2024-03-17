import React from 'react'
import { useSelector } from 'react-redux'
import './Header.css'
import { useDispatch } from 'react-redux'
import { deleteCartData } from '../utils/store'

const Cart = () => {
  let dispatch = useDispatch()
    let data= useSelector((state)=>{
    return state?.user?.cartData
    }
   )
   console.log(data)
   
 let displayItem = data.map(function(ele){
    return ele?.card?.info
 })
console.log(displayItem)
 let url1 = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'


  return (
    <div>
        {displayItem.map(function(ele){
                return <div className='d-flex justify-content-between m-3'>
                    <div>
                    <h4>{ele?.name}</h4>
                    <p>{(ele.price/100)}</p>
                    <p>{ele?.description}</p>
                    </div>
                    {ele?.imageId ? <img src={`${url1}${ele?.imageId}`} alt='food' style={{width:'100px', height:'100px', borderRadius:'20px'}}/>:''}
                    <button style={{backgroundColor:'red'}} onClick={()=>{dispatch(deleteCartData(ele))}}>Remove</button>
                    </div>
                    
        })}
    </div>
  )
}

export default Cart