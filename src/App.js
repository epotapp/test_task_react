// Styles
import './styles/style.css'
// Libs
import React from "react";

// Components
import Feedback from './components/Feedback';
import Posts from './components/Posts';


function App() {
  return (
    <div className="app">
      <Feedback/>

      <div className="whats-new">
        What's new?
      </div>

      <Posts/>
      
    </div>
  );
}

export default App;
