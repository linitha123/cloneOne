import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { context } from './componetns/App'
import './componetns/Body.css'
import Shimmer from './componetns/Shimmer'
import Card from './componetns/Card'
import { restaurantVeg } from './componetns/Card'

const Body = () => {
  let name = useContext(context)
  
    let [listOfCards, setListOfCards] = useState([])
    let [filteredData,setFilteredData]= useState([])
    let [searchItem,setSearchItem] = useState('')
    let RestaurentVegItems = restaurantVeg(Card)

 
    let fetchData = async function(){
        let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        console.log(data)
        let result = await data.json()
        console.log(result)
        let restaurentsData = result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      console.log(restaurentsData)
        setFilteredData(restaurentsData)
setListOfCards(restaurentsData)
    }
    useEffect(()=>{
      fetchData()
  },[])

console.log(listOfCards)
  return (<div>
       <input type='text' onChange={function(event){
           setSearchItem(event.target.value)
      }} className='input'/>
      <button onClick={function(){
       let filterdItems =  listOfCards?.filter(function(ele){
         return ele?.info?.name.toUpperCase().includes(searchItem.toUpperCase())
        })
        setFilteredData(filterdItems)

      }} className='btn btn-primary btn-sm m-2 mt-0'>search</button>
      <button onClick={function(){
        fetchData()
      }} className='btn btn-secondary  btn-sm m-2 mt-0'>All</button>
      <br/>
      <br/>
     <button onClick={function(){
      let ratedItmes = filteredData?.filter(function(ele){
         return ele?.info?.avgRating >4.5
         
      })
      setFilteredData(ratedItmes)
     }} className='btn btn-warning btn-sm m-2 mt-0'>topRatedItems</button>
      <h1>{name}, Whats on your Mind?</h1>
    <div style={{display:'flex', flexWrap:'wrap'}}>
  
       {filteredData.map(function(ele){
        
           return <Link to={'/restaurants/'+ele?.info?.id} className='link'>{ele?.info?.veg ?<RestaurentVegItems item={ele}/>:<Card item={ele}/>}</Link>

      })}
    </div> 
    </div>

  )
}


export default Body