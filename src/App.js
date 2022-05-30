import React, {useState} from 'react'
import axios from axios

import Search from './components/Search';

function App() {
  const [state, setState] = useState({
    s: '''',
    results: [], 
    selected: {}
  });


  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" +state.s).then((date) => {
        
      })
    }
  }


  const handleInput = (e) => {
    let s= e.target.value;

    setState(prevStare => {
      return { ...prevState, s: s }
    });
  }

  return(
  <div className='App'>
    <header>
      <h1>Movie Database</h1>
    </header>
    <main>
      <Search handleInput={handleInput} />
    </main>
  </div>
  );
}


export default App;