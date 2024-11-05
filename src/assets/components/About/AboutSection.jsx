import React from 'react'
import "./AboutSection.css"
const AboutSection = () => {
  return (
    <>
     
      <div>
        <div className='title' id='about'>Get to know more</div>
        <div className='sub_title'>About Me</div>
     </div>
    <div className='main_container'>
       
          <div className='about_image'>image</div>
          
          <div  className='side_content1'>
            <div className='side_content2'>
              <div className='newbie'>
                 <div>Newbie</div>
                 {/* <div>Fullstack Development</div> */}
              </div>
               <div className='newbie'>
                   <div>education</div>
               </div>
              
            </div>
              <div className='para'>
                 <div>Hi there! I'm Ajay, a passionate and enthusiastic full-stack software developer eager to make an impact in the tech industry. With a strong foundation in both front-end and back-end development, I thrive in dynamic environments where I can contribute innovative solutions to complex problems.</div>
              </div>
            
          </div>
      
    </div>

    </>
  )
}

export default AboutSection