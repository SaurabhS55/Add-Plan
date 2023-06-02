import TodoItem from "./TodoItem";
const Todos = (props) => {
    function onDelete(title){
        props.setTodos(props.todos.filter(e=>e!==title))
        localStorage.setItem("user",JSON.stringify(props.todos))
    }
return (
    <div className="containner"
    style={{display:"flex",flexDirection:"column",alignItems:"center"}}
    >
        <h2 className="text-center my-4">TODOs list</h2>
        {
            props.todos.length===0?"No Todos Available":props.todos.map((todo)=>{return <TodoItem todo={todo} onDelete={onDelete}/>
                })
        }
    </div>
)
}
export default Todos;