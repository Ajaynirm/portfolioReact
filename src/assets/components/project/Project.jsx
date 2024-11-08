import React from 'react'
import './project.css'
import ProjComponent from './ProjComponent'
const Project = () => {
  return (
    <>

  
    <header>
        <div>Browse My Recent</div>
        <div>Projects</div>
    </header>

    <div className='flex_container'>
       <div className='head'>project 1</div>

       <div className='proj-container'>
          <div className='proj-image'>
            <img src="" alt="" />
          </div>
          <div className='sub-container'>
              <div>title</div>
              <div>description</div>
              <div>These fonts contain serifs — small decorative strokes that protrude from the letter's main body. Serif fonts are easier to read in physical, printed formats, as the serifs lead the viewer’s eyes from character to character.</div>
              <div>Why</div>
              <div>Tech stack</div>
              <div className='live-demo'>
                  <div>
                    <button>Github</button>
                  </div>
                  <div>
                    <button>Live Demo</button>
                    </div>
              </div>
          </div>
          
       </div>
       
    </div>
    </>
  )
}

export default Project