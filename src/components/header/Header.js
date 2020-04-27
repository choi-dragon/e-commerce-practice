import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
import {auth} from '../../firebase/firebase.utils'

function Header({currentUser}){
    return(
        <div className ='header'>
            <Link to='/'>
            </Link>
            <div
            className='options'>
                <Link className='option' to ='/shop'>
                    SHOP
                </Link>
                <Link className='option' to ='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser?
                    <div className='option'
                    onClick={()=>auth.signOut()}>SIGN OUT</div>:
                    <Link className='option'>SIGN IN</Link>
                    }
            </div>
        </div>
    )
}

export default Header