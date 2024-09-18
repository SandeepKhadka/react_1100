import { useState } from "react"

const TodoState = () => {
  const [todos, setTodo] = useState([])
  function addTodo(e) {
    e.preventDefault()
    console.log(e.target.title.value);
    // todos.push(e.target.title.value) ** wrong way
    // let temp = todos ** wrong way
    let temp = [...todos, e.target.title.value]
    setTodo(temp)
    // setTodo(todos.push(e.target.title.value))
  }
  return (
    <>
      <h1>Todo</h1>
      {/* <p>todo : {JSON.stringify(todos)}</p>  we need to change this to string if there is object */}
      <form onSubmit={addTodo}>
        <input type="text" name="title" />
        <button>Add</button>
      </form>


      <ul>
        {
          todos.map(el => {
            return (<>
              <li>{el}</li> <button>delete</button>
            </>)
          })
        }
      </ul>
    </>
  )
}

export default TodoState
