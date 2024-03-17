import { useState,useEffect } from "react"
import MENU_URL  from "./constants"

function useGetData(restId){

let [showMenu,setShowMenu]= useState(null)

    useEffect(()=>{
        fetchData()
      },[])
      let fetchData = async function(){
        let data = await fetch(MENU_URL+restId)
        let result = await data.json()
        console.log(result)
        setShowMenu(result)
      }
      return showMenu 
}

export default useGetData


