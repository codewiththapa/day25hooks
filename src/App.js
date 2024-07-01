import React,{useEffect,useState} from 'react'
//import MyComponent from './MyComponent'
import axios from 'axios'

const App = () => {
  const [toogle,setToogle] = useState(true);
  const [count,setCount] = useState(1);
  const [text,setText] = useState("")
  useEffect(()=>{
  //component DidMount
 // window.addEventListener("click",abc);
    // fetch(`http://numbersapi.com/${count}`)
    // .then((response)=>response.text())
    // .then((data)=>setText(data))
    axios.get(`http://numbersapi.com/${count}`)
    .then((response)=>setText(response.data))
    //cleanup function
    //component will unmount
    return()=>{
    // window.removeEventListener("click",abc)
      console.log(" component will unmount")
    }
  },[count]);
  return (
    <div>
      {text}
      <br />
      <br />
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setToogle(!toogle)}>Toogle</button>
    </div>
  )
}

export default App
