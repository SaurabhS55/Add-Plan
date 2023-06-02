import React,{useState,useEffect} from 'react';
import './App.css';
import NavScrollExample from './Components/NavScrollExample';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import AddTodos  from './Components/AddTodos';
import {Route,Routes,Navigate} from 'react-router-dom'
import About from './Components/About';
function App() {
  let o;
  if(localStorage.getItem("user")===null){
    o=[]
  }
  else{
    o=JSON.parse(localStorage.getItem("user"))
  }
  let [todos,setTodos]=useState(o)
  useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(todos))

  },[todos])
  let addtodo=(title,desc)=>{
    // localStorage.setItem("user",JSON.stringify([...todos,{"title":title,"desc":desc}]))
    setTodos([...todos,{"title":title,"desc":desc}])
  }
  return (
    
    <div className="App">
      <NavScrollExample/>
      <Routes>
        <Route path='/' element={<><AddTodos addtodo={addtodo}/>
      <Todos todos={todos} setTodos={setTodos}/></>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
