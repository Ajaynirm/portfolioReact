import React from 'react';
import "./main.css";


const Main = () => {
  return (
    <>
        <div className="main">
            <div className='pic'>
                <div>
                    <img src="./public/prof2.png" alt="pic" className='prof-pic'/>
                </div>
            </div>
            <div className='pic_title'>
                <div>Hello I'm</div>
                <div className='name'>Ajay C</div>
                <div>a Fullstack Developer</div>
                <div className='main-btn-container'>
                    <button className='main-btn'>Download cv</button>
                    <button className='main-btn'>contact info</button>
                </div>
                <div className='icon-container'>
                    <div>
                        <img src="./public/leetc.gif" alt="leetcode"   onclick="location.href='https://leetcode.com/u/ajaysam397/'" className='icon'/>
                    </div>
                    <div>
                        <img src="./public/Github.gif" alt="github" onclick="location.href='https://github.com/Ajaynirm'" className='icon' />      
                    </div>
                    <div>
                        <img src="./public/linkedin.png" alt="linkedin"  onclick="location.href='https://linkedin.com/in/ajay-c-06465821a'" className='icon' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main