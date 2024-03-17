import useGetData  from '../utils/useGetData'
import ListItem from './ListItem'
import { useState,useEffect } from 'react'

import { useParams } from "react-router-dom"

const RestaurantsMenu = () => {
  let {restId} =useParams()

 let [showIndex,setShowIndex] = useState(null)
  let getData = useGetData(restId)


 
let value = getData?.data?.cards[2]?.card?.card?.info
console.log(value)

let cardsData = getData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(function(ele){
  return ele?.card?.card['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
})
console.log(cardsData)

let itemsCard = cardsData?.map(function(ele){
  return ele?.card?.card?.itemCards
})
console.log(itemsCard)

  return (
    <div>
      <h3>{value?.name}</h3>
    <p>{value?.costForTwoMessage}</p>
   <p>{value?.avgRating}</p>
    <p>{value?.cuisines.join(' ')}</p>
    <div className='d-flex justify-content-between m-3  cursor-pointer'></div>
  
   
     { itemsCard?.map(function(ele,index){
console.log(index)
      const hanleData =()=> {
        
        showIndex===index ? setShowIndex(null):setShowIndex(index)}
        console.log(showIndex)
    
      return <div>
        <ListItem item={ele} 

      showItem = {index === showIndex ? true:false} 
      setShowItem ={hanleData}
   
      />
       </div>
      
     })}
    
</div>
  )
}
 

export default RestaurantsMenu


