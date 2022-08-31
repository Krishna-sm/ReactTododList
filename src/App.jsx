import React, { useState } from "react";
import TodoListItems from "./TodoListItem";




const App=()=>{
    const [state,setState]=useState('');
    const [items,setitems]=useState([]);
    const InputEvent=(e)=>{
        setState(e.target.value);
    }

    const AddItem =()=>{
        setitems((oldItems)=>{
            return [...oldItems,state];
        })
        setState("");

    }
    const deleteItem=(id)=>{
       setitems((e)=>{
                return e.filter((A,i)=>{
                   return i!==id;
                })
       });
    }
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List --Krishna </h1>
                <br />
                <input type="text" placeholder="Add Items" onChange={InputEvent} value={state} />
                <button onClick={AddItem}> + </button>

                <ol>
                        {/* <li>{state}</li> */}
                        {items.map((e,i)=>{
                          return <TodoListItems item={e} key={i} id={i} onselect={deleteItem}/>
                        })}
                </ol>
            </div>
        </div>
        </>
    );
}

export default App;