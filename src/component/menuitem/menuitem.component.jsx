import React from 'react' 
import './menuitem.scss';

const Menuitem = (title)=>(
    <div className='main-item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default Menuitem;