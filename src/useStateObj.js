
// import React,{ useState } from "react"

// const UseStateObj=()=>{
//     const obj=[
//         {
//             id:1,
//             firstName:"mothilal",
//             lastName:"dharamsoth",
//             age:27
//         },
//         {
//             id:2,
//             firstName:"mothilal",
//             lastName:"dharamsoth",
//             age:27
//         },
//         {
//             id:3,
//             firstName:"mothilal",
//             lastName:"dharamsoth",
//             age:27
//         }
//     ];
//     const [data,setData]=useState(obj)

// const handleDelete=(id)=>{
//      const filterdata=data.filter((each)=>{
//         return each.id!==id;
//      })
//      setData(filterdata)
// }
        
    
//     return (
//         <div>
//             {data.map((each)=>{
//                 const {firstName,lastName,age,id}=each
//                 return(
//                     <ul>
//                         <h1>my name is {firstName}</h1>
//                         <h1>my lastName is {lastName}</h1>
//                         <h1>my age is {age}</h1>
//                         <button onClick={(id)=>handleDelete(id)}>chandge name</button>
//                     </ul>
//                 )
//             })}
            
//         </div>
//     )
// }
// export default UseStateObj;