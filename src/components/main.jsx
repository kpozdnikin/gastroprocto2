import React from 'react';
import Nav from './nav';

export default class Main extends React.Component{
    render(){
        return <div className='main'>
            <header className='header'>
                <Nav/>
                <div className='container'>
                    <div className='doctorText'>
                        <div className='doctorName'>Поздникина Ольга</div>
                        <div className='yourDoctor'>Ваш персональный доктор</div>
                        <button className='header_button'>получить консультацию</button>
                        <div className='button_shadow'></div>
                    </div>
                    <div className="photo_doctor"><img src='./img/photo_doctor.png'/></div>
                    <div className='rectangle10'></div>
                    <div className='rectangle9'></div>
                    <div className='rectangle8'>
                        <div>
                            <div>Следите за нами</div>
                            <img className='header_bottom' src="/img/bottom.png"/>
                            <a href="#"><img src="/img/vk.png"/></a>
                            <a href="#"><img src="/img/youtube.png"/></a>
                        </div>
                    </div>
                    <div className='rectangle7'></div>
                    <div className='rectangle5'></div>

                </div>
            </header>

            <section className='welcome'>Второй блок</section>

            <section className='quote'><div className='text_quote'>Медицина – это не услуга. Это сочетание своего рода чуда и профессиональных навыков</div></section>

            <section className='task-for-me'>Четвертый блок</section>

            <section className='map'>Карта</section>

            <footer>Подвал</footer>
        </div>;
    }
}
