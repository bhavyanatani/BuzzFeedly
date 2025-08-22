//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
const App  =()=>{
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_API_KEY;
  const pageSize = 15;
  return (
    <Router>
    <div>
      <Navbar />
        <LoadingBar
        color="#f11946"
        progress={progress}
      />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" country="us" />} />
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} category="business" country="us" />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category="entertainment" country="us" />} />
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category="health" country="us" />} />
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} category="science" country="us" />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category="sports" country="us" />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category="technology" country="us" />} />
      </Routes>

      </div>
      </Router>
    )
  }

  export default App;




