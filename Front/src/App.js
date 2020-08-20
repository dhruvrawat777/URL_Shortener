import React, { useState } from 'react';
import './App.css';
import 'axios';
import axios from 'axios';
const App=()=> {

  const [url,newurl]=useState('');

  const handler=()=>{
    console.log('hi');
    /* const post={
      argurl:url
    };
    console.log(post); */
    axios.post('http://localhost:5000',
    {headers: {
      'content-type': 'application/json',
      'Authorization': 'Client-ID [my-client-id]'
    },
     argurl:url
    })
    .then(response=>{
      console.log(JSON.stringify(response.data.msg));
    }).catch(error=>{
      console.log('ni hora');
      console.log(error.message)});

  };

  const valuehandler=(event)=>{
    console.log("changing state");
    newurl(event.target.value);
  }

  return (
    <div className="App">
       
          <input type="text" onChange={valuehandler}></input>
          <button type="submit" onClick={handler}>Submit</button>
   
       <h1>dhruc</h1>
    </div>
  );
}

export default App;
