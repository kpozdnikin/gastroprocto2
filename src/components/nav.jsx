import React from 'react';
import {Link}  from 'react-router-dom';
import NavState from '../context/navState';
import MainMenu from '../components/MainMenu';

export default class Nav extends React.Component{
    render() {
        return <div className='nav'>
                <strong className='label-top'>
                    Болит живот
                    <NavState>
                        <MainMenu />
                    </NavState>
                </strong>
                <Link to="/" className='topNav'>Главная</Link>
                <Link to="/blog" className='topNav'>Мой блог</Link>
                <Link to="/stomachache" className='topNav'>О боли в животе</Link>
                <Link to="/illnesses" className='topNav'>Заболевания ЖКТ</Link>
                <strong className='label-top'>+7 921 726 74 51</strong>
            </div>;
    }
}