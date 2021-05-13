import React from 'react';

import './collectionitem.scss';

const Collectionitem=({id,name,ImageUrl,Price})=>(
    <div className='collectionitem'>
        <div className='image' 
        style={{backgroundImage:`url(${ImageUrl})`}}/>
     <div className='footer'>
         <span className='name'>{name}</span>
         <span className='price'>{Price}</span>
     </div>
    </div>
)

export default Collectionitem;