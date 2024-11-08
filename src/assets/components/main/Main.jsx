import React from 'react';
import "./main.css";


const Main = () => {
  return (
    <>
        <div className="main">
            <div className='pic'>
                profile image
            </div>
            <div className='pic_title'>
                <div>Hello I'm</div>
                <div className='name'>Ajay</div>
                <div>Fullstack Developer</div>
                <div className='main-btn-container'>
                    <button className='main-btn'>Download cv</button>
                    <button className='main-btn'>contact info</button>
                </div>
                <div className='icon-container'>
                    <div>leetcode</div>
                    <div>github</div>
                    <div>linkedin</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main