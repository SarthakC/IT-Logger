import React, {useEffect} from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.css'
import M from "materialize-css/dist/js/materialize.min"

const  App=()=> {
  useEffect(()=>{
    M.AutoInit()
  })
  return (
    <div className="App">
      My App
    </div>
  );
}

export default App;
