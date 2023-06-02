import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const AddTodos = (props) => {
    let [title,setTitle]=useState("")
    let [desc,setDesc]=useState("")
    let add=(e)=>{
        e.preventDefault()
        if(!title || !desc){
            alert("title and desc required...")
        }
        else{
        props.addtodo(title,desc)
        setTitle("")
        setDesc("")
        }
    }
  return (
    <form style={{width:"50%",display:"block",margin:"0px auto",marginTop:"80px"}} onSubmit={add} >
        <h3 className="text-center">Add Todos</h3>
      <div class="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input
          type="text"
          class="form-control my-2"
          id="title"
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          aria-describedby="emailHelp"
          placeholder="Enter title"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Description</label>
        <textarea
          type="text"
          class="form-control my-2"
          id="desc"
          value={desc}
          onChange={(e)=>{setDesc(e.target.value)}}
          placeholder="Description"
          rows={5}
        />
      </div>
      <button type="submit" class="btn btn-primary my-2">
        Submit
      </button>
    </form>
  );
};
export default AddTodos;