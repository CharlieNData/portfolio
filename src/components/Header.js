import React from 'react'
import SocialBar from './SocialBar'; 

class Header extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <SocialBar />
                <div className='menu' id='menu'>
                    <div className='menu-line'></div>
                    <div className='menu-line'></div>
                    <div className='menu-line'></div>
                </div>
            </div>
        );
    }

}

export default Header
