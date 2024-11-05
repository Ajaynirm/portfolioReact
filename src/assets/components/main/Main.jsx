import React from 'react';
import "./main.css";
import profileImage from './images/aj.jpg';


const Main = () => {
  return (
    <>
        <div className="main">
            <div className='pic'>
                <img src={profileImage} alt="xyz" />
            </div>
            <div className='pic_title'>
                <div>Hello I'm</div>
                <div>Ajay</div>
                <div>Fullstack Developer</div>
                <div>
                    <button>Download cv</button>
                    <button>contact info</button>
                </div>
                <div>click
                </div>
            </div>
        </div>
    </>
  )
}

export default Main