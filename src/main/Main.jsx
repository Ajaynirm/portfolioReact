import React from 'react';
import "./main.css";



const Main = () => {
  return (
    <>
        <div className="main">
            <div className=''>
                <div>
                    <img src="./ninjaprof_11zon.jpg" alt="pic" className='prof-pic'/>
                    
                </div>
            </div>
            <div className='pic_title'>
                <div>Hello I'm</div>
                <div className='name'>Ajay </div>
                <div> Fullstack Developer</div>
                <div className='main-btn-container'>
                    <button className='main-btn1'>Download cv</button>
                    <button className='main-btn1'>contact info</button>
                </div>
                <div className='icon-container'>
                    <div>
                        <img src="./leetc.gif" alt="leetcode"   onClick={() => window.location.href="https://leetcode.com/u/ajaysam397/"} className='icon'/>
                    </div>
                    <div>
                        <img src="./Github.gif" alt="github" onClick={() => window.location.href="https://github.com/Ajaynirm"}  className='icon' />      
                    </div>
                    <div>
                        <img src="./linkedin.png" alt="linkedin" onClick={() => window.location.href="https://linkedin.com/in/ajay-c-06465821a"}  className='icon' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main