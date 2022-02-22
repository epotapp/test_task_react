// Styles
import './styles/style.css'
//Libs
import React from "react";


function App() {
  return (
    <div className="app">
      <div className="main">

        <div className="main__content">

          <div className="review">
          “I registered on the AidaForm website, having stumbled upon one of the form templates, which I really liked. My first form, which is still active by the way, was published 20 minutes after I found the AidaForm website and created an account!
          </div>

          <div className="author">
            <span className="author_name">Ben Johnson</span>
            <span className="author_instagram_username">, web-store owner</span>
          </div>

        </div>

        <div className="main__navigation">
          <div className="circle">
          </div>
          <div className="buttons">
            <button className="buttons_left"><div className="buttons_left_arrow"></div></button>
            <button className="buttons_right"><div className="buttons_right_arrow"></div></button>
          </div>
        </div>

      </div>
      <div className="whats-new">
        What's new?
      </div>

      <div className="posts">
        <div className="post"><div className="post_image"></div><div className="post_description">Instagram FAQ — All You Need To Know</div></div>
        <div className="post"><div className="post_image"></div><div className="post_description"></div></div>
        <div className="post"><div className="post_image"></div><div className="post_description"></div></div>
      </div>

      <div className="read-more">
        <button className="read-more_button">Read more</button>
      </div>
    </div>
  );
}

export default App;
