import React from 'react';
import './directory.scss';
import Menuitem from '../menuitem/menuitem.component'

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            section: [{
               title:'Car',
              // imageUrl:'https://www.drivespark.com/img/2020/06/hyundai-creta-1591190599.jpg',
               id:1
            },
            {
                title:'Bike',
              //  imageUrl:'https://www.tyremarket.com/roadtales/wp-content/uploads/2019/12/TVS-Apache-RTR-160-4V-NDTV-India-272x170.jpg',
                id:2
             },
             {
                title:'Home Appliances',
               // imageUrl:'https://media.istockphoto.com/photos/home-appliancess-set-of-household-kitchen-technics-in-the-new-or-picture-id952839420?k=6&m=952839420&s=612x612&w=0&h=VgQfQfryejLqCm9Z59lX2vzJuGAyjHIQPAaKtbGJPP8=',
                id:3
             },
             {
                title:'Laptop',
              //  imageUrl:'https://i.pcmag.com/imagery/articles/00tLYTqwmgFvacZlYPc5ecO-8..1583853669.jpg',
                id:4
             },
             {
                title:'Shoe',
               // imageUrl:'https://imgmedia.lbb.in/media/2019/07/5d35ed942681f012ea0e9b7a_1563815316519.jpg',
                id:5
             }
           ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
            {this.state.section.map(({title,id,imageUrl}) =>(
                <Menuitem key={id} title={title}/>))}
            </div>
        )
    }
}
export default Directory;