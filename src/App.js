import React from 'react';
import Body from './components/Body';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Applyhere from './components/Applyhere';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
     <Routes>
         <Route path='/'  element = { <Body/> } />
          <Route path='/Aboutus'  element = { <Aboutus/> } />
          <Route path='/Applyhere'  element = { <Applyhere/> } />


     </Routes>
     </Router>
     {/* <Footer/> */}

    </div>
  );
}

export default App;
