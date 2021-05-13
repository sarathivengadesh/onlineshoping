import React from 'react';

import Collectionitem from '../collectionitem/collectionitem.component' 

import './collection_preview.component.scss';

const Collectionpreview =({title,items})=>(
    <div className='collectionpreview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
         {
           items
           .filter((item,index)=>index<3).map(({id, ...otheritemprops}) => (
               <Collectionitem key={id} { ...otheritemprops} />
           ))
         }
        </div>
    </div>
)
export default Collectionpreview;