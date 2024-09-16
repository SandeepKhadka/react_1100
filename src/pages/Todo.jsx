const Todo = () => {
    // let userRole = "admin"
    // let userRole = "customer"
    let userRole = "seller"
    let todos = [
        {
            "title" : "React",
            "Description" : "This is react",
            "Status" : "Pending"
        },
        {
            "title" : "Node",
            "Description" : "This is Node",
            "Status" : "Completed"
        },
        {
            "title" : "Html",
            "Description" : "This is html",
            "Status" : "Completed"
        },
        {
            "title" : "CSS",
            "Description" : "This is css",
            "Status" : "Completed"
        },
    ]
  return (
    <>
      <h1>Todo</h1>
      <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

            {
                todos.map(el => {
                    return <tr>
                        <td>{el.title}</td>
                        <td>{el.Description}</td>
                        <td style={{background : "red"}}>{el.Status}</td>
                        <td>
                            {
                               ( userRole == "admin" || userRole == "seller") && <button>Delete</button>
                            }
                           
                            </td>
                    </tr>
                })
            }
            {/* {
                [
                    <tr>0</tr>,
                    <tr>1</tr>
                ]
            } */}
            {/* <tr>
                <td>{todos[0].title}</td>
                <td>{todos[0].Description}</td>
                <td>{todos[0].Status}</td>
            </tr>
            <tr>
                <td>{todos[1].title}</td>
                <td>{todos[1].Description}</td>
                <td>{todos[1].Status}</td>
            </tr>
            <tr>
                <td>{todos[2].title}</td>
                <td>{todos[2].Description}</td>
                <td>{todos[2].Status}</td>
            </tr>
            <tr>
                <td>{todos[3].title}</td>
                <td>{todos[3].Description}</td>
                <td>{todos[3].Status}</td>
            </tr> */}
        </tbody>
      </table>
    </>
  )
}

export default Todo
