import React from 'react';
import { withRouter } from 'react-router';
import './menuitem.style.scss';

const Menuitem = ({title,imageUrl,size,linkUrl,match,history})=>(
    <div className={`${size} menu`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image'
         style={{
             backgroundImage:`url(${imageUrl})`
         }}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);
 
export default withRouter(Menuitem);