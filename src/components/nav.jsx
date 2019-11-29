import React from 'react';
import {Link}  from 'react-router-dom';

export default class Nav extends React.Component{
    render() {
        return <div className='nav'>
                <strong className='label-top'>Болит живот</strong>
                <Link to="/">Главная</Link>
                <Link to="/blog">Мой блог</Link>
                <Link to="/stomachache">О боли в животе</Link>
                <Link to="/illnesses">Заболевания ЖКТ</Link>
                <strong className='label-top'>+7 921 726 74 51</strong>
            </div>;
    }
}