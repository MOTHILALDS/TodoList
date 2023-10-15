import React,{useState} from "react";
import "./index.css";


const TodoItem=()=>{
    const [list,setList]=useState([])
    const [message,setMessage]=useState({
        text:"",
        id:""
    })
    const changeMessage=(e)=>{
        setMessage({
            ...message,
            text:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        let newTodo={
            text:message.text,
            id:new Date().getTime().toString()
        }
        setList([
            ...list,
            newTodo
        ])
       
        setMessage({
            text:""
        }) 

        
    }
    return (
        <div>
            <h1>hello</h1>
            <div>
                <input type="text" value={message.text} onChange={changeMessage} />
                <button type="submit" onClick={handleSubmit}>Add</button>
            </div>
            <hr/>
            <ul>
                {list.map((eachItem)=>{
                    const {text,id}=eachItem
                    return(
                        <li className="list-container" key={id}>
                            <div className="item-container">
                                <h3 className="heading">{text}</h3>
                                <button className="delete-button btn-style">Delete</button>
                               
                            </div>
                        </li>
                    )
                })}
            </ul>
            
        </div>
       
    )
}
export default TodoItem;