import "./User.css"
export default function User(props){
  
   

    return(
        <div>
            {
                props.item.map(function(ele){
                 return <div>
                      <img src={ele.image} alt='item' style={{width:'100px'}}/>
       <h1>{ele.item}</h1>
       <p>{ele.price}</p>
       <p>{ele.rating}</p>
                    </div>

                })
            }
     
        </div>
    )
}











