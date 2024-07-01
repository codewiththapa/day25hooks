import React,{useEffect} from 'react'

const MyComponent = () => {
  useEffect(()=>{

    console.log(" My component is mounted")
    
    return()=>{
  
      console.log("My component will unmounted")
    }
  },[]);
  return <div> Hello</div>
}

export default MyComponent;
