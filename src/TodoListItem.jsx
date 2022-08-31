import React from "react";

const TodoListItems=(props)=>{
  
    return(
        <>
        <div className="todo_style">
            <i className="fa fa-times"
            onClick={()=>{
                props.onselect(props.id)
            }}
            />
        <li>{props.item}</li>
        </div>
        </>
    );
}

export default TodoListItems;