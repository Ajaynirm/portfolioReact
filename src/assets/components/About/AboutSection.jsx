import React from 'react'
import "./AboutSection.css"
const AboutSection = () => {
  return (
    <>
     
      <div>
        <div className='title'>Get to know more</div>
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
               
               <div className='educat'>education</div>
            </div>
              
            <div>paragraph</div>
          </div>
      
    </div>

    </>
  )
}

export default AboutSection