import React from 'react'
import "./aboutSection.css"
const AboutSection = () => {
  return (
    <>
     
      <header>
        <div className='title' id='about'>Get to know more</div>
        <div className='sub_title'>About Me</div>
     </header>
    <div className='main_container'>
       
          {/* <div className='about_image'> */}
            <img src="./macimg1.jpg" alt="x" height={"300px"} width={"300px"} className='about-image'/>
          {/* </div> */}
          
          <div  className='side_content1'>
            <div className='side_content2'>
              <div className='newbie glow'>
                 <div>Newbie</div>
                 <div>Fullstack Development</div>
              </div>
               <div className='educat glow'>
                   <div>
                    Education</div>
                   <div>B.E Computer Science and Engineering</div>
               </div>
              
            </div>
              <div className='para'>
                 <div>Hi there! I'm <big>Ajay C</big>, a passionate and enthusiastic <br /> full-stack software developer eager to make an impact in the tech industry. With a strong foundation in both front-end and back-end development, I thrive in dynamic environments where I can contribute innovative solutions to complex problems.</div>
              </div>
            
          </div>
      
    </div>

    </>
  )
}

export default AboutSection



