import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../logos/umberla.svg';
import './header.scss';

const Header = ()=>(
    <div className='header'>
        <Link className='Logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            <Link className='option' to='signin'> LOGIN</Link>
        </div>
    </div>
)

export default Header;