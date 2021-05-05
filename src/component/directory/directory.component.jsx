import React from 'react';
import './directory.scss';
import Menuitem from '../menuitem/menuitem.component'

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            section: [
                {
                 title:'Car',
                 imageUrl:'https://www.drivespark.com/img/2020/06/hyundai-creta-1591190599.jpg',
                 id:1,
               },
              {
                 title:'Bike',
                imageUrl:'https://imgd.aeplcdn.com/1280x720/n/cw/ec/49566/yamaha-fz-s-front-left-three-quarter1.jpeg?wm=2&q=75',
                 id:2,
              },
              {
                 title:'Home',
                 imageUrl:'https://media.istockphoto.com/photos/home-appliancess-set-of-household-kitchen-technics-in-the-new-or-picture-id952839420?k=6&m=952839420&s=612x612&w=0&h=VgQfQfryejLqCm9Z59lX2vzJuGAyjHIQPAaKtbGJPP8=',
                 id:3,
              },
              {
                 title:'Laptop',
                 imageUrl:'https://hackernoon.com/hn-images/0*K420HUOzgd_xij11',
                 size:'large',
                 id:4,
              },
              {
                 title:'Shoe',
                 imageUrl:'https://imgmedia.lbb.in/media/2019/07/5d35ed942681f012ea0e9b7a_1563815316519.jpg',
                 size:'large',
                 id:5,
              }
           ]
        };
    }

    render(){
        return(
            <div className='directory-menu'>
            {this.state.section.map(({title,id,imageUrl,size})=>(
                <Menuitem key={id} title={title} imageUrl={imageUrl} size={size}/>))}
            </div>
        );
    }
}
export default Directory;