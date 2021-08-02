import React from 'react'

 

const Todo = ({contenido,indice,deleteTodo}) => 
{
    return(
       <>
       <div className="list">
            <h3>{contenido}</h3> 
              <button className="btn-delete" onClick={()=>{deleteTodo(indice)}}>X</button> 
       </div>
       
       </>
    );
}

export default Todo