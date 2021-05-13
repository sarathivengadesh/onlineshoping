import React from 'react';
import Collectionpreview from '../../component/collection_preview/collection_preview.component';

import SHOP_DATA from './shop.data';

class Shoppage extends React.Component {
    constructor(props){
     super(props);

     this.state = {
         collections:SHOP_DATA
     }
    }

    render(props){
      return(
         <div className='shoppage'>
             {this.state.collections.map(({id,...otherCollectionProps})=> (
                 <Collectionpreview key={id}{...otherCollectionProps} />
             ))}
         </div>
      )
    }
}

export default Shoppage;