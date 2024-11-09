import React from 'react'
import './project.css'
import ProjComponent from './ProjComponent'
const Project = () => {
  return (
    <>

  
    <header>
        <div className='title' id='projects'>Browse My Recent</div>
        <div className='sub_title'>Projects</div>
    </header>

    <div className='flex_container'>
       <header>project 1</header>

       <div className='proj-container'>
          <div className='proj-image'>
            <img src="./public/accord.jpg" alt="xyz" className='proj-sample'/>
          </div>
          <div className='sub-container'>
              <div>title</div>
              <div>description</div>        
              <div>These fonts contain serifs — small decorative strokes that protrude from the letter's main body. Serif fonts are easier to read in physical, printed formats, as the serifs lead the viewer’s eyes from character to character.</div>
              <div>Why</div>
              <div >Tech stack</div>
              <div className='tech-gif'>
                  <div>
                      <img src="./public/React.gif" alt="abc" className='icon'/>
                  </div>
                  <div>
                      <img src="./public/javascript.gif" alt="abc" className='icon'/>
                  </div>
                  <div>
                      <img src="./public/Css.gif" alt="abc" className='icon'/>
                  </div>
              </div>

              <div className='live-demo'>
                  <div>
                    <button className='main-btn'> Github</button>
                  </div>
                  <div>
                    <button className='main-btn'>Live Demo</button>
                    </div>
              </div>
          </div>
          
       </div>
       
    </div>
    </>
  )
}

export default Project



