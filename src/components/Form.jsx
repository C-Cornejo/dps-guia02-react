import React,{useState} from 'react';
import Todo from './Todo';


const Form = () =>{
    
    const [todo_seleccionado,setTodo] =  useState({})

    const [todos_lista,setTodos] = useState([
        {contenido:'todo1'},
        {contenido:'todo2'},
        {contenido:'todo3'}
    ])
    
    const handleChange = e => setTodo({[e.target.name]:e.target.value})

    const handleClick = e => { 

        if(Object.keys(todo_seleccionado).length === 0 || todo_seleccionado.todo_seleccionado.trim() === ''){
            alert('el campo no puede estar vacio')
            return
        }
        setTodos([...todos_lista,{contenido: todo_seleccionado.todo_seleccionado.trim()} ]) // agrega los nuevos a la lista

    }
    const deleteTodo = indice => {
        const newtodos = [...todos_lista]
        
        var ejected = newtodos.splice(indice,1)
        setTodos([...newtodos])
    }

    return(
        <>
  
        <form onSubmit={e => e.preventDefault()}>
            <label >Agregar tarea</label>
            <input type="text" name="todo_seleccionado" onChange={handleChange}/>
            <button onClick={handleClick}>Agregar</button>
        </form>
        {
             todos_lista.map((valor,indice) => ( 
                
             <Todo contenido={valor.contenido} key={indice} indice={indice}   deleteTodo={deleteTodo} />))
        }
        </>
    )
}

export default Form