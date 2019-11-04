import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';

export default class Nav extends React.Component{
    render() {
        return <div className='nav'>
                <Link to="/">Главная страница</Link>
                <Link to="/stomachache">О боли в животе</Link>
                <Link to="/illnesses">Заболевания ЖКТ</Link>
                <Link to="/blog">Блог</Link>
            </div>;
    }
}