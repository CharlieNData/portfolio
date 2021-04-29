import React from 'react'

class Header extends React.Component {
    componentDidMount() {
        const toggleButton = document.getElementById('menu');
        const navList = document.getElementById('nav-list')

        toggleButton.addEventListener('click', () => {
            navList.classList.toggle('active');
        })
    }

    render() {
        return (
            <div className='navbar'>
                <div className='logo'>
                    <a href='#'>
                    </a>
                </div>
                <ul className='nav-list' id='nav-list'>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Projects</a>
                    </li>
                </ul>
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
