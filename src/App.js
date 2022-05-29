import React, {useState} from 'react'

import Search from './components/Search';

function App() {
  const [state, setState] = useState({
    s: '''',
    results: [], 
    selected: {}
  });

  const handleInput = (e) => {
    let s= e.target.value;

    setState(prevStare => {
      return s = e.target.value;
    });
    console.log(state.s);
  }

  return(
  <div className='App'>
    <header>
      <h1>Movie Database</h1>
    </header>
    <main>
      <Search/>
    </main>
  </div>
  );
}


export default App;