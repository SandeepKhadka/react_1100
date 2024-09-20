import { useState } from "react"

const TodoState = () => {
  const [todos, setTodo] = useState([])
  function addTodo(e) {
    e.preventDefault()
    // todos.push(e.target.title.value) ** wrong way
    // let temp = todos ** wrong way
    let temp = [...todos, e.target.title.value]
    setTodo(temp)
    // setTodo(todos.push(e.target.title.value))
  }

  function deleteTodo(index) {
    let temp = todos.filter((el, i) => i != index)
    setTodo(temp)
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
          todos.map((el, index) => {
            return (<>
              <li>{el}</li> <button onClick={() => {
                deleteTodo(index)
              }}>delete</button>
            </>)
          })
        }
      </ul>
    </>
  )
}

export default TodoState
