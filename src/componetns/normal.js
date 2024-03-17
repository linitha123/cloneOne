let a =[{
    name:'Linitha',
    gender:'female'
},
{
    name:'Lakshmi',
    gender:'female'
}]
export let b = a.filter((ele)=>ele.name.includes('Linitha'))
   

console.log(b)
