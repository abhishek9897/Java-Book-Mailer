
import {useState} from "react";

function App() {

  const[email,setEmail]=useState("");
  const [name,setName]=useState("");

  async function Login(e){
    e.preventDefault();
   const res= await fetch("/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
      },
      body:JSON.stringify({name,email}),
    })

  }
    
  return (
    <div className="App">
       <form method='POST' action="/signup">
         
      
         <label className='labels' >Your Name</label>
           <input  type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            
             
         <label className='labels'>Email address</label>
           <input  type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
             
        
         
         <button className='btn1' onClick={Login}type="submit" class="btn btn-primary">Submit</button>
       </form>
    </div>
  );
}

export default App;
