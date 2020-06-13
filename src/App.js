import React, { useState } from 'react';
import Api from './apicomponent';

const App =()=>{
  const [data,setData] = useState("posts");
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button type="button" className="btn btn-outline-primary"
            onClick={()=>setData("posts")}>POSTS</button>
            <button type="button" className="btn btn-outline-primary"
            onClick={()=>setData("users")}>USERS</button>
          </div>
        </div>
        <Api value={data}/>
      </div>
    )
  }

export default App;
