import './Card.css'


const Card = (props) => {

    let url="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"

  return (

    <div style={{ margin:'20px'}}>
    
    <img className='image' src={url+props?.item?.info?.cloudinaryImageId} alt='food' />
  <h4 className='fs-6'>{props?.item?.info?.name}</h4>
   <b style={{paddingRight:'10px'}}>{props?.item?.info?.avgRating}</b>
   <b>{props?.item?.info?.sla?.slaString}</b>
   <p>{props?.item?.info?.cuisines[0]}</p>
   <p>{props?.item?.info?.areaName}</p>
    </div>
  )
}
export default Card

export function restaurantVeg(Card){
  return(props)=>{

  
  return <div>
    <label className='text-white bg-success vegLabel'>Veg</label>
    <Card {...props}/>
  </div>
  }
}
