import React from 'react'
import './home.style.scss';


const Homepage =()=>(
    
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Cars</h1>
                        <span className='subtitle'>shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Bikes</h1>
                        <span className='subtitle'>shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Computer and laptop</h1>
                        <span className='subtitle'>shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Cycles</h1>
                        <span className='subtitle'>shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Home Appliances</h1>
                        <span className='subtitle'>shop Now</span>
                    </div>
                </div>
            </div>
        </div>
);

export default Homepage;